<?php

namespace App\DataFixtures;

use App\Entity\Customer;
use App\Entity\Reservation;
use App\Entity\Restaurant;
use DateTime;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ObjectManager;
use Psr\Log\LoggerInterface;

class ReservationFixtures extends Fixture implements DependentFixtureInterface
{
    public function __construct(
        private EntityManagerInterface $entityManager,
        private LoggerInterface $loggerInterface

    ) {
    }

    public function load(ObjectManager $manager): void
    {

        foreach ($this->ReservationData() as [$customerId, $restaurantId, $date, $guests, $booking, $booked]) {
            $customer = $this->getCustomer($customerId);
            $restaurant = $this->getRestaurant($restaurantId);
            
            $reservation = new Reservation;
            $reservation
                ->setCustomerId($customer)
                ->setRestaurantId($restaurant)
                ->setDate(new DateTime($date))
                ->setTime(new DateTime($date))
                ->setGuests($guests)
                ->setBooking($booking)
                ->setBooked($booked);

            $manager->persist($reservation);
            $manager->flush();
        }
    }

    private function getCustomer(string $id) {
        $customer = $this -> entityManager ->getRepository(Customer::class)->find($id);
        return $customer;

    }

    private function getRestaurant(string $id) {
        $restaurant = $this -> entityManager ->getRepository(Restaurant::class)->find($id);
        return $restaurant;
    }

    private function ReservationData()
    {
        return [
            [1, 1, '2023-08-09 12:00:00', 3, true, true],
            [2, 1, '2023-08-09 12:00:00', 4, true, true],
            [3, 1, '2023-08-10 14:00:00', 10, true, true],
            [4, 1, '2023-08-11 13:00:00', 7, true, true],
            [5, 1, '2023-08-09 12:00:00', 2, true, false],
        ];
    }

    public function getDependencies()
    {
        return array(
            CustomerFixtures::class,
        );
    }
}
