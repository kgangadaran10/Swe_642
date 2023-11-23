import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-programs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './programs.component.html',
  styleUrl: './programs.component.scss'
})
export class ProgramsComponent {

  programs = [
    {
      title: 'Computational Science, MS',
      url: 'https://catalog.gmu.edu/colleges-schools/science/computational-data-sciences/computational-sciences-ms/',
      requirements: [
        {
          number: 'CSI 690',
          name: 'Numerical Methods',
        },
        {
          number: 'CSI 695',
          name: 'Scientific Databases',
        },
        {
          number: 'CSI 702',
          name: 'High-Performance Computing',
        },
        {
          number: 'CSI 703',
          name: 'Scientific and Statistical Visualization',
        },
        {
          number: 'CSI *, CSS *, CDS *',
          name: '15 credits from any graduate level courses',
        },
      ],
    },
    {
      title: 'Computer Engineering, MS',
      url: 'https://catalog.gmu.edu/colleges-schools/engineering-computing/engineering/electrical-computer/computer-engineering-ms/',
      requirements: [
        {
          number: 'ECE 508',
          name: 'Internet of Things',
        },
        {
          number: 'ECE 511',
          name: 'Computer Architecture',
        },
        {
          number: 'ECE 516',
          name: 'Mobile Systems and Applications',
        },
        {
          number: 'ECE 535',
          name: 'Digital Signal Processing',
        },
        {
          number: 'ECE 554',
          name: 'Machine Learning for Embedded Systems',
        },
        {
          number: 'ECE 611',
          name: 'Advanced Computer Architecture',
        },
        {
          number: 'ECE 646',
          name: 'Applied Cryptography',
        },
      ],
    },
    {
      title: 'Computer Science, MS',
      url: 'https://catalog.gmu.edu/colleges-schools/engineering-computing/school-computing/computer-science/computer-science-ms/',
      requirements: [
        {
          number: 'CS 530',
          name: 'Mathematical Foundations of Computer Science',
        },
        {
          number: 'CS 531',
          name: 'Computer Systems and Fundamentals of Systems Programming',
        },
        {
          number: 'CS 580',
          name: 'Introduction to Artificial Intelligence',
        },
        {
          number: 'CS 583',
          name: 'Analysis of Algorithms',
        },
        {
          number: 'SWE 621',
          name: 'Software Design and Architecture',
        },
        {
          number: 'CS 687',
          name: 'Advanced Artificial Intelligence',
        },
        {
          number: 'SWE 642',
          name: 'Software Engineering for the World Wide Web',
        },
        {
          number: 'SWE 637',
          name: 'Software Testing',
        },
      ],
    },
    {
      title: 'Bioinformatics and Computational Biology, MS',
      url: 'https://catalog.gmu.edu/colleges-schools/science/systems-biology/bioinformatics-computational-biology-ms/',
      requirements: [
        {
          number: 'BINF 630',
          name: 'Bioinformatics Methods',
        },
        {
          number: 'BINF 631',
          name: 'Molecular Cell Biology for Bioinformatics',
        },
        {
          number: 'BINF 634',
          name: 'Bioinformatics Programming',
        },
        {
          number: 'BINF 701',
          name: 'Systems Biology',
        },
        {
          number: 'BINF 730',
          name: 'Biological Sequence and Genome Analysis',
        },
      ],
    },
  ];

}
