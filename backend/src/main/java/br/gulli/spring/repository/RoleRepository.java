package br.gulli.spring.repository;

import org.springframework.data.repository.CrudRepository;

import br.gulli.spring.domain.Role;

public interface RoleRepository extends CrudRepository<Role, Long> {
}
