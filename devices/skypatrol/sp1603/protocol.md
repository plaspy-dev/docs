---
slug: /skypatrol/sp1603/protocol
id: sp1603-protocol
sidebar_label: Protocol
title: SkyPatrol - SP1603 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the SkyPatrol SP1603 and how the device communicates with Plaspy for monitoring and integration
keywords:
  - SkyPatrol SP1603 protocol
  - SP1603 GPS tracker
  - SkyPatrol SP1603 Plaspy
  - SP1603 communication protocol
  - SkyPatrol tracking protocol
  - GPS tracker protocol Plaspy
  - offender monitoring tracker
  - home detention GPS tracker
  - tamper detection GPS tracker
  - dual SIM GPS tracker
---

# SkyPatrol - SP1603 Protocol

This page provides a public, high level description of the communication protocol context for the SkyPatrol SP1603 when used with Plaspy. It is intended to help administrators, integrators, and technical staff understand how the tracker reports location and status into Plaspy without exposing sensitive implementation details. The SP1603 is purpose built for offender monitoring and home detention use cases and offers features such as dual SIM connectivity, tamper detection with a fiber optic strap, and optional in-home beacon support.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device is correctly configured to report to the Plaspy endpoint. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so device behavior observed in the field may differ from one unit or firmware release to another.

## Protocol Overview

The protocol for the SP1603 defines how the tracker identifies itself, sends location updates, and reports events like tamper, battery, and beacon presence to a remote server. In the context of Plaspy, the protocol's purpose is to deliver consistent, parseable telemetry so the platform can normalize data and apply compliance and alerting rules.

- Enables periodic and event driven transmission of GPS and status telemetry to Plaspy for mapping and logging.
- Conveys device identity and state so Plaspy can associate reports with the correct monitored subject and record.
- Delivers tamper alerts, battery level, connectivity status, and optional beacon presence needed for compliance workflows.
- Supports redundancy and resilience to maintain reports during intermittent cellular conditions, assisting Plaspy in building a continuous history.
- Provides the raw signals Plaspy uses to generate actionable events such as boundary breaches, strap compromise, and low battery warnings.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a shared endpoint and port and automatically determines the device protocol from the traffic it receives. In most cases, when the SP1603 is configured to report to the Plaspy server, no manual protocol selection in Plaspy is required.

- Plaspy accepts reports at the shared server domain d.plaspy.com and the server IP 54.85.159.138 using port 8888.
- All devices in Plaspy use the same port, simplifying device configuration and server routing.
- When the tracker points to the Plaspy endpoint and begins reporting, the platform detects which supported protocol the device is using and normalizes the telemetry.
- Normalized telemetry allows Plaspy to map incoming fields to platform events like tamper, battery, and location without user intervention.
- Users typically only need to ensure the device is configured to send data to the Plaspy endpoint; Plaspy handles the remainder of protocol detection.

## Transport and Connection Context

The SP1603 can be configured to use industry standard transport options and points to Plaspy using the shared endpoint. Transport choice affects how the device delivers packets to Plaspy but does not change the high level events the platform receives.

- Devices may be configured to use UDP or TCP on port 8888 depending on device configuration and cellular network considerations.
- Devices can point to the Plaspy server domain d.plaspy.com or directly to the IP address 54.85.159.138 for reporting.
- Plaspy uses the same port for all supported devices, reducing configuration differences across tracker types.
- Transport selection (UDP vs TCP) is usually set on the device side and should match network and carrier best practices for reliability.
- Firewalls and carrier APN configurations should allow outbound traffic to port 8888 to ensure reliable delivery to Plaspy.

## Protocol Compatibility Notes

- Firmware revisions can introduce changes in reported fields or event behavior; verify the SP1603 firmware level when troubleshooting compatibility.
- Hardware revisions or optional features such as in-home beacons may add telemetry or change event formats; confirm which features are active on each device.
- Transport preference (UDP vs TCP) may affect delivery characteristics; choose the transport that reflects your reliability and latency needs.
- Manufacturer configuration of reporting address and intervals must point to the Plaspy endpoint for automatic detection to occur.
- Always validate device behavior in a test environment before wide deployment to ensure reporting and alerts match operational expectations.
- Consult official SkyPatrol documentation and release notes for firmware specific details that impact protocol behavior.

## Why Protocol Understanding Matters

Understanding the communication protocol helps technical teams correctly configure devices, interpret the telemetry Plaspy receives, and troubleshoot issues that affect monitoring continuity and alerting. This knowledge improves setup speed and reduces time to resolve data discrepancies.

- Speeds initial deployment by clarifying which settings must be set to point the tracker at Plaspy.
- Helps interpret why a device might stop reporting or why certain event types are not appearing in Plaspy.
- Assists with network troubleshooting when connectivity, APN, or firewall settings interfere with reports.
- Supports informed decisions about transport selection and retry behavior for improved reliability.
- Aids in mapping device events such as tamper or beacon presence to organizational alerting and response procedures.

## Why Use Plaspy with This Protocol

Using Plaspy with the SkyPatrol SP1603 allows organizations to centralize location and event telemetry from ankle-worn electronic monitoring devices into a single platform for visualization, rules-based alerting, and audit logging. Plaspy ingests the SP1603 telemetry and provides supervisors with the historical and real-time context needed to manage compliance and respond to incidents effectively.

To learn more about how Plaspy works with devices like the SP1603, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and manufacturer guidance, verify information on the SkyPatrol website https://www.skypatrol.com/. Protocol support and firmware behavior can change over time, so checking official manufacturer documentation ensures your deployment remains aligned with the latest device capabilities.
