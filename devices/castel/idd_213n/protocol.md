---
slug: /castel/idd_213n/protocol
id: idd_213n-protocol
sidebar_label: Protocol
title: Castel - IDD-213N Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol notes for Castel IDD-213N integration with Plaspy including transport and detection details
keywords:
  - Castel IDD-213N protocol
  - Castel IDD-213N GPS protocol
  - Castel IDD-213N tracking protocol
  - IDD-213N Plaspy compatibility
  - Castel vehicle tracker protocol
  - OBD II vehicle tracking protocol
  - GPS tracker communication Plaspy
  - fleet management Castel IDD-213N
  - Castel diagnostic tracking protocol
  - IDD-213N remote diagnostics
---

# Castel - IDD-213N Protocol

This page describes the public protocol context for using the Castel IDD-213N tracker with Plaspy. It focuses on how the device communicates with a backend service, what role that communication plays for tracking and remote diagnostics, and which high level connection settings are used to integrate the IDD-213N into Plaspy. The goal is to provide useful, non sensitive protocol context to help with setup and troubleshooting while encouraging verification against manufacturer documentation.

The Castel IDD-213N is an OBD capable on board diagnostic and tracking unit that reads ECU data and sends location and diagnostic telemetry to a backend server. Plaspy uses shared connection settings for supported devices and automatically detects the tracker protocol when the unit reports correctly to the Plaspy endpoint. Devices may be configured to use UDP or TCP on port 8888 and Plaspy accepts connections at the domain d.plaspy.com and the IP 54.85.159.138. Note that exact protocol behavior and message content can vary by firmware, hardware revision, and manufacturer implementation.

## Protocol Overview

At a high level, the tracker communication protocol is the set of conventions the IDD-213N uses to report position, vehicle diagnostics, alarms, and status to a server. The protocol enables the device to identify itself to a backend endpoint, deliver periodic and event driven telemetry, and receive limited backend commands or acknowledgements when supported by the device and firmware.

- Enables regular GPS location reporting and vehicle diagnostic telemetry such as speed, RPM, and DTC related readings in a structured way.
- Carries event notifications for alarms and driving behavior monitoring so backend systems can trigger alerts or actions.
- Allows the device to present an identifier and status information so the backend can associate incoming data with the correct vehicle or asset.
- Supports both periodic reporting and event driven messages to balance data timeliness with network usage.
- Provides the basis for remote diagnostics and fleet management workflows when combined with vehicle bus standards like OBD II and J1939.

## How Plaspy Detects the Protocol

Plaspy is designed to accept incoming reports from many common tracker models while using a consistent server endpoint and port. When a Castel IDD-213N is configured to report to Plaspy, the platform automatically detects the tracker protocol and maps incoming messages to the correct parser and processing pipeline.

- Plaspy listens on a single port for all supported devices so you do not need multiple ports per device type.
- The Plaspy endpoint for device reporting is d.plaspy.com with an alternate connection option to the IP 54.85.159.138.
- Devices may connect over UDP or TCP to port 8888 depending on device configuration and network requirements.
- If the IDD-213N is pointed at the Plaspy endpoint and reporting correctly, manual protocol selection inside Plaspy is typically not required.
- Automatic detection helps simplify onboarding but accurate device configuration on the tracker side remains important.

## Transport and Connection Context

The IDD-213N can be configured to send its telemetry to a backend by domain name or IP address. For Plaspy integration, the essential connection details are standardized so the device can reliably reach the Plaspy ingestion endpoint.

- Plaspy accepts connections at the domain d.plaspy.com and the IP address 54.85.159.138.
- The device may be configured to use UDP or TCP for reporting depending on device support and network environment.
- Plaspy uses port 8888 for all supported devices so the same port setting applies across models.
- Choose UDP for lower overhead reporting where network reliability and latency suit your needs, or TCP when a connection oriented transport is preferred by the device or network.
- Ensure any intermediate network infrastructure allows outbound connections to the Plaspy endpoint on port 8888.

## Protocol Compatibility Notes

- Firmware revisions can change what messages the IDD-213N emits, which fields are present, and how diagnostic data is reported.
- Hardware revisions and optional interfaces may affect available telemetry such as additional inputs, CAN bus coverage, or extended diagnostic frames.
- Manufacturer side configuration options may allow switching between UDP and TCP reporting or altering reporting intervals and event filters.
- Network environment and carrier 3G support influence connectivity; the IDD-213N supports relevant 3G frequency bands for its region but coverage can vary.
- Always verify the device is configured to point to d.plaspy.com or 54.85.159.138 and to use port 8888 for Plaspy integration.
- Cross check compatibility against the official Castel device documentation when planning large scale deployments.

## Why Protocol Understanding Matters

Understanding how the IDD-213N communicates helps ensure reliable data collection, accurate diagnostics, and predictable behavior in a fleet environment. Awareness of the communication protocol and transport context speeds up troubleshooting and reduces integration friction with Plaspy.

- Helps confirm the device is pointed at the correct Plaspy endpoint and port so telemetry arrives reliably.
- Makes it easier to interpret diagnostic and location data when fields or reporting behavior change after a firmware update.
- Aids in choosing the appropriate transport mode and reporting interval for network and operational constraints.
- Supports faster resolution of connectivity issues by narrowing whether problems are network, device configuration, or firmware related.
- Allows planners to align device capabilities with fleet reporting and alerting requirements.

## Why Use Plaspy with This Protocol

Using the Castel IDD-213N with Plaspy provides a practical path to combine vehicle diagnostic data and GPS tracking into a unified fleet management workflow. The IDD-213Ns OBD and vehicle bus compatibility coupled with Plaspys unified ingestion endpoint simplifies collecting telemetry across mixed fleets and enables real time monitoring, alarm handling, and basic remote diagnostics.

If you want to learn more about how Plaspy handles device reporting, configuration options, and fleet features visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and implementation guidance please verify information with the manufacturer at http://www.castelecom.com/ since protocol support and firmware behavior can change over time.
