package br.med.maisvida.prova.dto;

import java.util.ArrayList;
import java.util.List;

public class JobDTO {

	private Long id;
	private String name;
	private boolean active;
	private Long parentJob;
	private List<TaskDTO> tasks = new ArrayList<TaskDTO>();

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}

	public Long getParentJob() {
		return parentJob;
	}

	public void setParentJob(Long parentJob) {
		this.parentJob = parentJob;
	}

	public List<TaskDTO> getTasks() {
		return tasks;
	}

	public void setTasks(List<TaskDTO> tasks) {
		this.tasks = tasks;
	}

}
