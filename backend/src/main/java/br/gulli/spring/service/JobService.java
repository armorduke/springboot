package br.gulli.spring.service;

import java.util.List;

import br.gulli.spring.domain.Job;
import br.gulli.spring.dto.JobDTO;

public interface JobService {

	List<Job> findAllJobs();
	
	JobDTO cadastrar(JobDTO dto) throws Exception;
	
}
