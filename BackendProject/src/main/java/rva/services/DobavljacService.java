package rva.services;

import java.util.List;

import rva.models.Dobavljac;

public interface DobavljacService extends CrudService<Dobavljac> {

	List<Dobavljac> getDobavljacsByNaziv (String naziv);
}
