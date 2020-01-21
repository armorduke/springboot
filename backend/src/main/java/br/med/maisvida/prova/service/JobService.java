package br.med.maisvida.prova.service;

import java.util.List;

import br.med.maisvida.prova.domain.Job;
import br.med.maisvida.prova.dto.JobDTO;

public interface JobService {

	List<Job> findAllJobs();
	
	JobDTO cadastrar(JobDTO dto) throws Exception;
	
}
