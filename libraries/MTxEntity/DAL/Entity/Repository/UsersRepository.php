<?php
namespace MTxEntity\DAL\Entity\Repository;
use Doctrine\ORM\EntityRepository;

class UsersRepository extends EntityRepository{

	/**
	 * Get List user
	 * 
	 * @author Thien Le
	 * 
	 * @return array $rst
	 */
	public function getList()
	{
		$rst = array();
		try {
			$qb = $this->getEntityManager()->createQueryBuilder();
			$qb->select('u')
               ->from('MTxEntity:Users', 'u');
			$query = $qb->getQuery();
			$rst = $query->getResult();
		} catch (Exception $ex) {
			throw $ex;
		}
		return $rst;	
	}
}