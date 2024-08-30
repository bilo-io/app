// // languages.ts

// // languages.ts

// import { Section } from '@vision/core';

export const codeSamples: any[] = [
  {
    data: `
## Python

- General-purpose language with clean and readable syntax.
- Great for data analysis, machine learning, and web development.
- Founded in: 1991
- Underlying language: C
- Compilation: Interpreted
- [Official Documentation](https://docs.python.org/3/)
- [Code Playground (repl.it)](https://repl.it/languages/python)

\`\`\`python
def calculate_distance(body1, body2):
    # Your distance calculation algorithm here
    x1, y1, z1 = body1['x'], body1['y'], body1['z']
    x2, y2, z2 = body2['x'], body2['y'], body2['z']
    distance = ((x2 - x1)**2 + (y2 - y1)**2 + (z2 - z1)**2)**0.5
    return distance
\`\`\`
`,
    displayOrder: 1,
    name: 'Python',
    type: 'Text',
  },
  {
    data: `
## JavaScript

- Versatile language used for front-end and back-end web development.
- Popular for building interactive and dynamic web applications.
- Founded in: 1995
- Underlying language: C
- Compilation: Interpreted
- [Official Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Code Playground (CodePen)](https://codepen.io/pen?template=JzdzKd)

\`\`\`javascript
function calculateDistance(body1, body2) {
    // Your distance calculation algorithm here
    const { x: x1, y: y1, z: z1 } = body1;
    const { x: x2, y: y2, z: z2 } = body2;
    const distance = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2 + (z2 - z1)**2);
    return distance;
}
\`\`\`
`,
    displayOrder: 2,
    name: 'JavaScript',
    type: 'Text',
  },
  {
    data: `
## Java

- Object-oriented language known for its portability and scalability.
- Widely used for building enterprise-level applications.
- Founded in: 1995
- Underlying language: C++
- Compilation: Compiled
- [Official Documentation](https://docs.oracle.com/en/java/)
- [Code Playground (Repl.it)](https://repl.it/languages/java)

\`\`\`java
public class DistanceCalculator {
    public double calculateDistance(Point3D body1, Point3D body2) {
        // Your distance calculation algorithm here
        double x1 = body1.getX();
        double y1 = body1.getY();
        double z1 = body1.getZ();
        double x2 = body2.getX();
        double y2 = body2.getY();
        double z2 = body2.getZ();
        double distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) + Math.pow(z2 - z1, 2));
        return distance;
    }
}
\`\`\`
`,
    displayOrder: 3,
    name: 'Java',
    type: 'Text',
  },
  {
    data: `
## C

- Low-level language with direct memory access and high performance.
- Widely used for system programming and embedded systems.
- Founded in: 1972
- Underlying language: Assembly
- Compilation: Compiled
- [Official Documentation](https://devdocs.io/c/)
- [Code Playground (OnlineGDB)](https://www.onlinegdb.com/online_c_compiler)

\`\`\`c
#include <stdio.h>

int calculateDistance(Point3D body1, Point3D body2) {
    // Your distance calculation algorithm here
    double x1 = body1.x;
    double y1 = body1.y;
    double z1 = body1.z;
    double x2 = body2.x;
    double y2 = body2.y;
    double z2 = body2.z;
    double distance = sqrt(pow(x2 - x1, 2) + pow(y2 - y1, 2) + pow(z2 - z1, 2));
    return distance;
}
\`\`\`
`,
    displayOrder: 4,
    name: 'C',
    type: 'Text',
  },
  {
    data: `
## C++

- Extension of C with object-oriented features and STL.
- Used for high-performance applications and game development.
- Founded in: 1983
- Underlying language: C
- Compilation: Compiled
- [Official Documentation](https://devdocs.io/cpp/)
- [Code Playground (repl.it)](https://repl.it/languages/cpp)

\`\`\`cpp
#include <iostream>

double calculateDistance(Point3D body1, Point3D body2) {
    // Your distance calculation algorithm here
    double x1 = body1.getX();
    double y1 = body1.getY();
    double z1 = body1.getZ();
    double x2 = body2.getX();
    double y2 = body2.getY();
    double z2 = body2.getZ();
    double distance = std::sqrt(std::pow(x2 - x1, 2) + std::pow(y2 - y1, 2) + std::pow(z2 - z1, 2));
    return distance;
}
\`\`\`
`,
    displayOrder: 5,
    name: 'C++',
    type: 'Text',
  },
  {
    data: `
## C#

- Developed by Microsoft for .NET platform.
- Known for its versatility and strong support for Windows development.
- Founded in: 2000
- Underlying language: C++
- Compilation: Compiled
- [Official Documentation](https://docs.microsoft.com/en-us/dotnet/csharp/)
- [Code Playground (dotnetfiddle)](https://dotnetfiddle.net/)

\`\`\`csharp
using System;

public class DistanceCalculator
{
    public double CalculateDistance(Point3D body1, Point3D body2)
    {
        // Your distance calculation algorithm here
        double x1 = body1.X;
        double y1 = body1.Y;
        double z1 = body1.Z;
        double x2 = body2.X;
        double y2 = body2.Y;
        double z2 = body2.Z;
        double distance = Math.Sqrt(Math.Pow(x2 - x1, 2) + Math.Pow(y2 - y1, 2) + Math.Pow(z2 - z1, 2));
        return distance;
    }
}
\`\`\`
`,
    displayOrder: 6,
    name: 'C#',
    type: 'Text',
  },
  {
    data: `
## PHP

- Server-side scripting language for web development.
- Widely used for building dynamic and interactive web applications.
- Founded in: 1995
- Underlying language: C
- Compilation: Interpreted
- [Official Documentation](https://www.php.net/docs.php)
- [Code Playground (repl.it)](https://repl.it/languages/php)

\`\`\`php
function calculateDistance($body1, $body2) {
    // Your distance calculation algorithm here
    $x1 = $body1['x'];
    $y1 = $body1['y'];
    $z1 = $body1['z'];
    $x2 = $body2['x'];
    $y2 = $body2['y'];
    $z2 = $body2['z'];
    $distance = sqrt(pow($x2 - $x1, 2) + pow($y2 - $y1, 2) + pow($z2 - $z1, 2));
    return $distance;
}
\`\`\`
`,
    displayOrder: 7,
    name: 'PHP',
    type: 'Text',
  },
  {
    data: `
## TypeScript

- Superset of JavaScript with static typing.
- Enables better code organization and tooling for large projects.
- Founded in: 2012
- Underlying language: JavaScript
- Compilation: Compiled
- [Official Documentation](https://www.typescriptlang.org/docs/)
- [Code Playground (TypeScript Playground)](https://www.typescriptlang.org/play)

\`\`\`typescript
class DistanceCalculator {
    calculateDistance(body1: Point3D, body2: Point3D): number {
        // Your distance calculation algorithm here
        const x1 = body1.x;
        const y1 = body1.y;
        const z1 = body1.z;
        const x2 = body2.x;
        const y2 = body2.y;
        const z2 = body2.z;
        const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) + Math.pow(z2 - z1, 2));
        return distance;
    }
}
\`\`\`
`,
    displayOrder: 8,
    name: 'TypeScript',
    type: 'Text',
  },
  {
    data: `
## Swift

- Developed by Apple for iOS, macOS, watchOS, and tvOS development.
- Known for its safety features and expressive syntax.
- Founded in: 2014
- Underlying language: Objective-C
- Compilation: Compiled
- [Official Documentation](https://developer.apple.com/documentation/swift)
- [Code Playground (repl.it)](https://repl.it/languages/swift)

\`\`\`swift
class DistanceCalculator {
    func calculateDistance(body1: Point3D, body2: Point3D) -> Double {
        // Your distance calculation algorithm here
        let x1 = body1.x
        let y1 = body1.y
        let z1 = body1.z
        let x2 = body2.x
        let y2 = body2.y
        let z2 = body2.z
        let distance = sqrt(pow(x2 - x1, 2) + pow(y2 - y1, 2) + pow(z2 - z1, 2))
        return distance
    }
}
\`\`\`
`,
    displayOrder: 9,
    name: 'Swift',
    type: 'Text',
  },
  {
    data: `
## Ruby

- Dynamic, object-oriented language known for its simplicity and productivity.
- Popular for web development using Ruby on Rails framework.
- Founded in: 1995
- Underlying language: C
- Compilation: Interpreted
- [Official Documentation](https://ruby-doc.org/)
- [Code Playground (repl.it)](https://repl.it/languages/ruby)

\`\`\`ruby
class DistanceCalculator
  def calculate_distance(body1, body2)
    # Your distance calculation algorithm here
    x1, y1, z1 = body1[:x], body1[:y], body1[:z]
    x2, y2, z2 = body2[:x], body2[:y], body2[:z]
    distance = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2 + (z2 - z1)**2)
    return distance
  end
end
\`\`\`
`,
    displayOrder: 10,
    name: 'Ruby',
    type: 'Text',
  },
];

export const eulaSections: any[] = [
  {
    data: `
## End User License Agreement (EULA)

Welcome to Vision Studio (Artificial Intelligence Management System). This End User License Agreement (EULA) outlines the terms and conditions that govern your use of the Vision Studio software. By using Vision Studio, you agree to be bound by these terms. If you do not agree to these terms, please do not use Vision Studio.

Please read this EULA carefully as it contains important information regarding your rights and obligations.

### 1. Definitions

- "Vision Studio" refers to the Artificial Intelligence Management System software developed by Vision Corp..
- "User" or "you" refers to any individual or entity that uses Vision Studio.

### 2. License Grant

Subject to the terms and conditions of this EULA, Vision Corp. grants you a non-exclusive, non-transferable, revocable license to use Vision Studio for your personal or internal business purposes.

### 3. Intellectual Property Rights

Vision Studio and all associated intellectual property rights are owned by Vision Corp.. You acknowledge that you do not acquire any ownership rights to Vision Studio under this EULA.

### 4. Restrictions

You shall not:

- Modify, translate, reverse engineer, decompile, disassemble, or create derivative works of Vision Studio.
- Use Vision Studio for any unlawful or unauthorized purpose.
- Remove, alter, or obscure any copyright, trademark, or other proprietary rights notices from Vision Studio.

### 5. Data Privacy

Vision Corp. may collect and process certain data in connection with your use of Vision Studio. By using Vision Studio, you consent to the collection and processing of such data in accordance with our Privacy Policy.

### 6. Termination

This EULA is effective until terminated. Vision Corp. may terminate this license at any time if you breach any provision of this EULA. Upon termination, you must cease all use of Vision Studio and destroy all copies in your possession.

### 7. Disclaimer of Warranty

Vision Studio is provided "as is" without warranty of any kind. Vision Corp. disclaims all warranties, whether express, implied, or statutory, regarding Vision Studio, including but not limited to any warranties of merchantability, fitness for a particular purpose, and non-infringement.

### 8. Limitation of Liability

In no event shall Vision Corp. be liable for any damages, whether direct, indirect, incidental, special, or consequential, arising out of or in connection with the use of Vision Studio.

### 9. Governing Law

This EULA shall be governed by and construed in accordance with the laws of [Jurisdiction], without regard to its conflict of laws principles.

### 10. Entire Agreement

This EULA constitutes the entire agreement between you and Vision Corp. regarding the use of Vision Studio and supersedes all prior and contemporaneous agreements.

If you have any questions or concerns about this EULA, please contact us at [contact@example.com].
`,
    displayOrder: 1,
    name: 'Introduction',
    type: 'Text',
  },
  {
    data: `
## Acceptance of Agreement

By clicking the "I agree" or similar button or by installing, accessing, or using Vision Studio, you acknowledge that you have read, understood, and agree to be bound by the terms and conditions of this EULA. If you do not agree to these terms, you must not use Vision Studio.

Please review this EULA carefully before proceeding.
`,
    displayOrder: 2,
    name: 'Acceptance of Agreement',
    type: 'Text',
  },
  {
    data: `
## Updates and Modifications

Vision Corp. may update or modify this EULA from time to time without notice. Your continued use of Vision Studio after any such changes shall constitute your acceptance of the revised EULA.

Please check this page periodically for updates.
`,
    displayOrder: 3,
    name: 'Updates and Modifications',
    type: 'Text',
  },
  {
    data: `
## Contact Information

If you have any questions or concerns regarding this EULA, please contact us at:

Email: [contact@example.com]
Address: [1234 Main Street, City, State, Zip]
Phone: [123-456-7890]
`,
    displayOrder: 4,
    name: 'Contact Information',
    type: 'Text',
  },
];

export const subscriptionAgreementSections: any[] = [
  {
    data: `
## Subscription Agreement

This Subscription Agreement (the "Agreement") is entered into by and between Vision Corp. ("Provider") and the undersigned entity or individual ("Subscriber"). This Agreement governs the terms and conditions of Subscriber's use of the Vision Studio (Artificial Intelligence Management System) software.

### 1. Definitions

- "Vision Studio" refers to the Artificial Intelligence Management System software developed by Vision Corp..
- "Subscriber" or "you" refers to any entity or individual that subscribes to and uses Vision Studio

### 2. Subscription Services

Subject to the terms and conditions of this Agreement, Provider agrees to provide Subscriber with access to the Vision Studio software for the duration of the subscription period. Subscriber acknowledges that Vision Studio is a cloud-based software-as-a-service (SaaS) offering.

### 3. Subscription Term

The initial subscription term shall be [start date] through [end date]. This Agreement shall automatically renew for successive [monthly/annual] periods unless either party provides written notice of non-renewal at least [number] days before the end of the current term.

### 4. Subscription Fees

In consideration for the subscription services, Subscriber shall pay the applicable subscription fees as specified in the pricing schedule provided by Provider. Fees are due [monthly/annually] in advance and shall be paid by [credit card/wire transfer/other method].

### 5. License Grant

During the subscription term, Provider grants Subscriber a non-exclusive, non-transferable license to access and use Vision Studio solely for Subscriber's internal business purposes.

### 6. Data Privacy

Provider shall process Subscriber's data in accordance with its Privacy Policy. Subscriber acknowledges that Provider may collect and use certain data to improve the performance and functionality of Vision Studio

### 7. Acceptable Use

Subscriber agrees not to use Vision Studio for any unlawful, fraudulent, or malicious activities. Subscriber shall comply with all applicable laws and regulations while using Vision Studio

### 8. Support and Maintenance

Provider shall provide reasonable support and maintenance services during the subscription term. Support requests can be submitted through [support email/portal/phone].

### 9. Termination

Either party may terminate this Agreement for cause if the other party breaches any material term of this Agreement. Termination for cause shall be effective upon written notice.

### 10. Confidentiality

Both parties shall keep confidential any non-public information received from the other party during the term of this Agreement.

### 11. Limitation of Liability

In no event shall either party be liable to the other for any indirect, incidental, special, or consequential damages arising out of or in connection with this Agreement.

### 12. Governing Law and Jurisdiction

This Agreement shall be governed by and construed in accordance with the laws of [Jurisdiction], without regard to its conflict of laws principles. Any disputes arising under this Agreement shall be subject to the exclusive jurisdiction of the courts in [Jurisdiction].

### 13. Entire Agreement

This Agreement constitutes the entire understanding between the parties concerning the subject matter hereof and supersedes all prior and contemporaneous agreements.

Please sign and return a copy of this Agreement to indicate your acceptance of its terms and conditions.

Agreed and accepted by:

Provider: [Name and Title]
Date: [Date]

Subscriber: [Name and Title]
Date: [Date]
`,
    displayOrder: 1,
    name: 'Subscription Agreement',
    type: 'Text',
  },
  {
    data: `
## Acceptance of Agreement

By signing and returning a copy of this Agreement, Subscriber acknowledges that it has read, understood, and agrees to be bound by the terms and conditions set forth herein.

Please review this Agreement carefully before signing.
`,
    displayOrder: 2,
    name: 'Acceptance of Agreement',
    type: 'Text',
  },
  {
    data: `
## Updates and Modifications

Provider may update or modify this Agreement from time to time without notice. Any changes to this Agreement will be effective upon posting on the Provider's website. Subscriber's continued use of Vision Studio after any such changes shall constitute its acceptance of the revised Agreement.

Please check the Provider's website periodically for updates.
`,
    displayOrder: 3,
    name: 'Updates and Modifications',
    type: 'Text',
  },
  {
    data: `
## Contact Information

If you have any questions or concerns regarding this Agreement, please contact us at:

Email: [contact@example.com]
Address: [1234 Main Street, City, State, Zip]
Phone: [123-456-7890]
`,
    displayOrder: 4,
    name: 'Contact Information',
    type: 'Text',
  },
];

export const dmcaPolicySections: any[] = [
  {
    data: `
## DMCA Policy

This DMCA Policy (the "Policy") applies to the Vision Studio (Artificial Intelligence Management System) software provided by Vision Corp. ("Provider"). This Policy outlines the procedure for handling copyright infringement claims in accordance with the Digital Millennium Copyright Act.

### 1. Reporting Copyright Infringement

If you believe that your copyrighted work has been used or reproduced in a manner that constitutes copyright infringement, please provide a written notification ("DMCA Notice") to our designated copyright agent. The DMCA Notice should include the following information:

1. The physical or electronic signature of the copyright owner or their authorized representative.
2. Identification of the copyrighted work claimed to have been infringed or, if multiple works are involved, a representative list of such works.
3. Identification of the material that is claimed to be infringing or to be the subject of infringing activity and that is to be removed or access to which is to be disabled, and sufficient information to permit the Provider to locate the material.
4. Contact information, including the name, address, telephone number, and email address of the complaining party.
5. A statement that the complaining party has a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law.
6. A statement that the information in the notification is accurate, and under penalty of perjury, that the complaining party is authorized to act on behalf of the copyright owner.

DMCA Notices should be sent to our designated copyright agent:

Copyright Agent
Vision Corp.
Address: [1234 Main Street, City, State, Zip]
Email: [dmca@example.com]

### 2. Provider's Response

Upon receipt of a valid DMCA Notice, the Provider will promptly investigate the alleged infringement. If the Provider determines that copyright infringement has occurred, it will take appropriate actions, which may include the removal or disabling of the infringing material.

### 3. Counter-Notification

If you believe that your material has been removed or disabled in error, you may send a counter-notification ("Counter Notice") to our designated copyright agent. The Counter Notice should include the following information:

1. The physical or electronic signature of the subscriber.
2. Identification of the material that has been removed or to which access has been disabled and the location at which the material appeared before it was removed or disabled.
3. A statement under penalty of perjury that the subscriber has a good faith belief that the material was removed or disabled as a result of mistake or misidentification of the material.
4. Subscriber's name, address, telephone number, and email address.
5. A statement that the subscriber consents to the jurisdiction of the federal district court for the judicial district in which the address is located, or if the subscriber's address is outside of the United States, for any judicial district in which the Provider may be found, and that the subscriber will accept service of process from the person who provided the DMCA Notice or an agent of such person.

Counter Notices should be sent to our designated copyright agent at the address and email provided above.

### 4. Repeat Infringers

In accordance with the DMCA, the Provider reserves the right to terminate the accounts of repeat infringers.

### 5. Modification of Policy

The Provider may update or modify this Policy from time to time without notice. Any changes to this Policy will be effective upon posting on the Provider's website.

Please review this Policy periodically for updates.
`,
    displayOrder: 1,
    name: 'DMCA Policy',
    type: 'Text',
  },
  {
    data: `
## Contact Information

If you have any questions or concerns regarding this DMCA Policy, please contact us at:

Email: [contact@example.com]
Address: [1234 Main Street, City, State, Zip]
Phone: [123-456-7890]
`,
    displayOrder: 2,
    name: 'Contact Information',
    type: 'Text',
  },
];

export const securityPolicySections: any[] = [
  {
    data: `
## Security Policy

This Security Policy (the "Policy") outlines the security measures and practices implemented by Vision Corp. ("Provider") to protect the Vision Studio (Artificial Intelligence Management System) software and its users. The security of our system is of utmost importance, and we are committed to ensuring the confidentiality, integrity, and availability of data.

### 1. Access Controls

- Access to Vision Studio is restricted to authorized personnel only.
- User authentication is required for access, using strong passwords and multi-factor authentication.
- Role-based access control is implemented to limit user privileges based on their responsibilities.

### 2. Data Encryption

- Data transmitted to and from Vision Studio is encrypted using industry-standard protocols (e.g., TLS/SSL).
- Sensitive data at rest is stored in an encrypted format to prevent unauthorized access.

### 3. Data Privacy

- Provider complies with all applicable data protection laws and regulations.
- User data is handled according to our Privacy Policy, ensuring user consent and data protection.

### 4. Network Security

- Vision Studio servers are protected by firewalls and intrusion detection systems.
- Regular vulnerability assessments and penetration testing are conducted to identify and address potential vulnerabilities.

### 5. Incident Response

- Provider has an incident response plan in place to promptly address and mitigate security incidents.
- Users are encouraged to report any security concerns or incidents to our security team.

### 6. Employee Training

- Provider conducts security awareness training for all employees to ensure they are aware of security best practices.
- Employees with access to Vision Studio undergo additional security training.

### 7. Third-Party Security

- Third-party vendors and partners are subject to security assessments to ensure their compliance with security standards.
- Contracts with third parties include security requirements and responsibilities.

### 8. Physical Security

- Data centers and server facilities hosting Vision Studio are equipped with physical access controls and surveillance.

### 9. Regular Audits

- Provider conducts regular security audits to assess compliance with security policies and standards.

### 10. Compliance

- Provider adheres to relevant industry standards and regulations for data security.
- Regular reviews are conducted to ensure ongoing compliance with security best practices.

### 11. User Responsibilities

- Users are responsible for safeguarding their login credentials and reporting any unauthorized access.
- Users should notify Provider of any security vulnerabilities or concerns.

### 12. Policy Updates

- This Policy may be updated from time to time to reflect changes in security practices.
- Users will be notified of any significant changes to this Policy.

### 13. Contact Information

If you have any questions or concerns regarding this Security Policy, please contact us at:

Email: [contact@example.com]
Address: [1234 Main Street, City, State, Zip]
Phone: [123-456-7890]
`,
    displayOrder: 1,
    name: 'Security Policy',
    type: 'Text',
  },
];

export const tosSections: any[] = [
  {
    data: `
## Terms of Service

Welcome to Vision Studio (Artificial Intelligence Management System) provided by Vision Corp. ("Provider"). By accessing or using Vision Studio, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use Vision Studio

### 1. License Grant

Subject to these Terms, Provider grants you a limited, non-exclusive, non-transferable, and revocable license to use Vision Studio for your internal business purposes.

### 2. Use of Vision Studio

- You shall not use Vision Studio for any unlawful, fraudulent, or malicious activities.
- You are responsible for maintaining the security and confidentiality of your login credentials.
- You shall not access, interfere with, or disrupt the operation of Vision Studio or its associated networks.

### 3. Intellectual Property

- Vision Studio and all associated intellectual property rights are owned by Vision Corp..
- You shall not copy, modify, distribute, or create derivative works of Vision Studio

### 4. Data Privacy

- Provider collects and processes certain data in connection with your use of Vision Studio
- Data collected is handled according to our Privacy Policy.

### 5. Termination

Provider may terminate or suspend your access to Vision Studio at any time for violation of these Terms.

### 6. Disclaimer of Warranty

Vision Studio is provided "as is" without warranty of any kind.

### 7. Limitation of Liability

In no event shall Provider be liable for any damages arising out of or in connection with the use of Vision Studio

### 8. Indemnification

You agree to indemnify and hold Provider harmless from any claims or damages arising from your use of Vision Studio

### 9. Governing Law and Jurisdiction

These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction], without regard to its conflict of laws principles.

### 10. Entire Agreement

These Terms constitute the entire agreement between you and Provider regarding the use of Vision Studio and supersede all prior and contemporaneous agreements.

If you have any questions or concerns about these Terms, please contact us at [contact@example.com].
`,
    displayOrder: 1,
    name: 'Terms of Service',
    type: 'Text',
  },
  {
    data: `
## Acceptance of Terms

By accessing or using Vision Studio, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.

Please review these Terms carefully before proceeding.
`,
    displayOrder: 2,
    name: 'Acceptance of Terms',
    type: 'Text',
  },
  {
    data: `
## Updates and Modifications

Provider may update or modify these Terms from time to time without notice. Your continued use of Vision Studio after any such changes shall constitute your acceptance of the revised Terms.

Please check this page periodically for updates.
`,
    displayOrder: 3,
    name: 'Updates and Modifications',
    type: 'Text',
  },
  {
    data: `
## Contact Information

If you have any questions or concerns regarding these Terms, please contact us at:

Email: [contact@example.com]
Address: [1234 Main Street, City, State, Zip]
Phone: [123-456-7890]
`,
    displayOrder: 4,
    name: 'Contact Information',
    type: 'Text',
  },
];

// privacy-policy.ts

export const privacyPolicySections: any[] = [
  {
    data: `
## Privacy Policy

Vision Corp. ("Provider") values the privacy and security of its users and is committed to protecting their data when using Vision Studio (Artificial Intelligence Management System). This Privacy Policy outlines the types of data collected, how it is used, and the measures taken to safeguard it.

### 1. Data Collection and Use

- Provider collects certain information, including personal data, when you use Vision Studio
- Data is used for the purpose of providing and improving Vision Studio services.

### 2. Cookies and Tracking Technologies

- Vision Studio may use cookies and tracking technologies to enhance user experience and analyze usage patterns.

### 3. Data Sharing

- Provider may share certain data with third-party service providers to facilitate Vision Studio services.
- Data is shared in accordance with applicable laws and regulations.

### 4. Data Security

- Provider implements industry-standard security measures to protect data from unauthorized access.

### 5. Data Retention

- Data collected through Vision Studio is retained for as long as necessary to fulfill the purposes outlined in this Privacy Policy.

### 6. Children's Privacy

- Vision Studio is not intended for use by individuals under the age of 13.
- Provider does not knowingly collect data from children under 13.

### 7. Third-Party Links

- Vision Studio may contain links to third-party websites or services.
- Provider is not responsible for the privacy practices of such third parties.

### 8. Data Subject Rights

- You have the right to access, correct, and delete your personal data.
- Requests for data subject rights should be submitted to [privacy@example.com].

### 9. Changes to Privacy Policy

- Provider may update or modify this Privacy Policy from time to time without notice.
- Users will be notified of any significant changes to this Policy.

### 10. Contact Information

If you have any questions or concerns regarding this Privacy Policy, please contact us at:

Email: [contact@example.com]
Address: [1234 Main Street, City, State, Zip]
Phone: [123-456-7890]
`,
    displayOrder: 1,
    name: 'Privacy Policy',
    type: 'Text',
  },
];

export const userDataDeletion: any[] = [
  {

    data: `
    # User Data Deletion
    `,
    // https://visionstudio.ai/legal/privacy-policy
    name: 'User Data Deletion',
    type: 'Text'
  }
];



export const documents = [
  {
    data: tosSections,
    galleryId: 'Legal',
    id: 'tos',
    name: 'Terms of Service'
  },
  {
    data: privacyPolicySections,
    galleryId: 'Legal',
    id: 'privacy-policy',
    name: 'Privacy Policy'
  },
  {
    data: securityPolicySections,
    galleryId: 'Security',
    id: 'security-policy',
    name: 'Security Policy'
  },
  {
    data: subscriptionAgreementSections,
    galleryId: 'Usage',
    id: 'subscription',
    name: 'Subscription'
  },
  {
    data: eulaSections,
    galleryId: 'Usage',
    id: 'eula',
    name: 'EULA'
  },
  {
    data: dmcaPolicySections,
    galleryId: 'Misc',
    id: 'dmca',
    name: 'DMCA'
  },
  {
    data: codeSamples,
    galleryId: 'Misc',
    id: 'code',
    name: 'Code'
  },
  {
    data: userDataDeletion,
    galleryId: 'Misc',
    id: 'user-data-deletion',
    name: 'User Data Deletion'
  }
];

export const legalDocuments = documents;

// export const documents = [];