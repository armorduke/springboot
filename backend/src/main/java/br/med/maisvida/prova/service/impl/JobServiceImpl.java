package br.med.maisvida.prova.service.impl;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.med.maisvida.prova.domain.Job;
import br.med.maisvida.prova.domain.Task;
import br.med.maisvida.prova.dto.JobDTO;
import br.med.maisvida.prova.dto.TaskDTO;
import br.med.maisvida.prova.repository.JobRepository;
import br.med.maisvida.prova.service.JobService;

@Service
public class JobServiceImpl implements JobService {

	@Autowired
	private JobRepository jobRepository;
	
	@Override
	public List<Job> findAllJobs() {
		return (List<Job>) jobRepository.findAll();
	}

	@Override
	public JobDTO cadastrar(JobDTO dto) throws Exception {
		if(dto.getName() == null || dto.getName().isEmpty()) {
			throw new Exception("Erro ao tentar cadastrar sem nome");
		}
		System.out.println(dto);
		Job job = new Job();
		job.setName(dto.getName());
		job.setActive(dto.isActive());
		if(dto.getParentJob() != null) {
			Optional<Job> parent = jobRepository.findById(dto.getParentJob());			
			job.setParentJob(parent.get());
		}
		Task task = null;
		for (TaskDTO taskDTO : dto.getTasks()) {
			task = new Task();
			task.setJob(job);
			task.setCompleted(taskDTO.isCompleted());
			task.setCreatedAt(new Date());
			task.setName(taskDTO.getName());
			task.setWeight(taskDTO.getWeight());
			job.getTasks().add(task);
		}
		job = jobRepository.save(job);
		dto.setId(job.getId());
		return dto;
	}

}
