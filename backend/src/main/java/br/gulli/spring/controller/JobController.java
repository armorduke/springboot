package br.gulli.spring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.gulli.spring.domain.Job;
import br.gulli.spring.dto.FiltroDTO;
import br.gulli.spring.dto.JobDTO;
import br.gulli.spring.service.JobService;

@RestController
@RequestMapping("/api/v2")
public class JobController {

	@Autowired
	private JobService jobService;

	@RequestMapping(value = "/jobs", method = RequestMethod.GET, produces = "application/json")
	@PreAuthorize("hasAuthority('STANDARD_USER')")
	public List<Job> getJobs() {
		return jobService.findAllJobs();
	}

	@PostMapping(value = "/jobs", produces = "application/json", consumes = "application/json")
	@PreAuthorize("hasAuthority('STANDARD_USER')")
	public ResponseEntity<?> cadastrar(@RequestBody FiltroDTO filtroDTO) throws Exception {
		JobDTO jobDTO = jobService.cadastrar(filtroDTO.getJobDTO().get(0));
		return new ResponseEntity<JobDTO>(jobDTO, HttpStatus.OK);
	}

}
