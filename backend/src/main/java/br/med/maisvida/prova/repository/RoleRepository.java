package br.med.maisvida.prova.repository;

import org.springframework.data.repository.CrudRepository;

import br.med.maisvida.prova.domain.Role;

public interface RoleRepository extends CrudRepository<Role, Long> {
}
