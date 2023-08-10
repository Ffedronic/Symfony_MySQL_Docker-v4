<?php

namespace App\DataFixtures;

use App\Entity\Customer;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

class CustomerFixtures extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager): void
    {
        for ($i = 0; $i < 5; $i++) {
            $customer = new Customer;
            $customer
                ->setName('customer'.$i)
                ->setPhone('+3364496944'.$i)
                ->setEmail('customer'.$i.'@gmail.com');
            $manager->persist($customer);
            $manager->flush();    # code...
        }
    }

    public function getDependencies()
    {
        return array(
            RestaurantFixtures::class,
        );
    }
}
