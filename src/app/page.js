import DisplayCard from "@/components/DisplayCard";
import Link from "next/link";

export default function Home() {
  return (
    <div className="m-10">
      <div className="grid grid-cols-3 gap-4">
        <Link href='/traversal'>
          <DisplayCard title="Traversal Algorithms" desc="Algorithms which are used to traverse a tree or 
          a graph." img="traversal.png"></DisplayCard>
        </Link>

        <Link href='/dijikstras'>
          <DisplayCard title="Dijikstras Algorithm" desc="An algorithm used to find the shortest 
          path between 2 nodes." img='dijikstras.jpg'></DisplayCard>
        </Link>
        
        <Link href='/sieve'>
          <DisplayCard title="Sieve of Eratosthenes" desc="An algorithm used to find the prime 
          numbers using hashing." img='sieve.png'></DisplayCard>
        </Link>

        <Link href='/searching'>
          <DisplayCard title="Binary Search" desc="An improved way to search an element in a sorted 
          array" img='searching.png'></DisplayCard>
        </Link>

        <Link href='/sorting'>
          <DisplayCard title="Sorting" desc="A group of algorithm which can be used to sort 
          a given set of elements." img="sorting.png"></DisplayCard>
        </Link>

        <Link href='/nqueens'>
          <DisplayCard title="N-queens" desc="Using backtracking to place N-queens on a chess 
          board." img='nqueen.png'></DisplayCard>
        </Link>
      </div>
    </div>
    )
}
