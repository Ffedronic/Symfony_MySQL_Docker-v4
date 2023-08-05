<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\Restaurant;
use DateTime;

class RestaurantFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $openingHour = new DateTime("12:00:00");
        $closureHour = new DateTime("14:00:00");
        $setIntervalService = new DateTime("01:00:00");
        
        $restaurant = new Restaurant;
        $restaurant
            ->setName("Test Restaurant")
            ->setPhone("+33644969445")
            ->setEmail("test@test.com")
            ->setOpeningHour($openingHour)
            ->setClosureHour($closureHour)
            ->setIntervalTimeService($setIntervalService)
            ->setMaxGuestsPerIntervalTimeService(9);
        
        $manager->persist($restaurant);
        $manager->flush();
    }
}
