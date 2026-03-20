---
slug: /gotop/g01/protocol
id: g01-protocol
sidebar_label: Protocol
title: GOTOP - G01 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for GOTOP G01 showing how the device communicates with Plaspy servers for tracking and telemetry
keywords:
  - GOTOP G01 protocol
  - GOTOP G01 GPS protocol
  - GOTOP G01 communication protocol
  - GOTOP G01 tracking protocol
  - GOTOP G01 Plaspy compatibility
  - GOTOP Plaspy integration
  - G01 vehicle tracker protocol
  - GPS tracker G01 communication
  - G01 fleet management protocol
  - GOTOP G01 protocol guide
---

# GOTOP - G01 Protocol

This page summarizes the public protocol context for using the GOTOP G01 tracker with Plaspy. It focuses on how the device communicates with Plaspy in general terms, the connection settings Plaspy exposes publicly, and practical considerations for deploying G01 units in fleet and vehicle tracking scenarios. The G01 is a compact GPS and BDS enabled tracker that reports position, status inputs, and alarm events suitable for Plaspy ingestion.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform, but exact protocol behavior can vary by firmware version, hardware revision, and how the manufacturer configures the device. The G01 feature set — dual GNSS positioning, ACC detection, SOS alarm, remote cut off and backup battery reporting — maps to the kinds of telemetry Plaspy ingests, while device specific packet timing and command behavior remain manufacturer controlled.

## Protocol Overview

The G01 reporting protocol is the vehicle for location updates, telemetry and alarm events from the tracker to Plaspy. At a high level, the protocol enables the device to identify itself, deliver GPS and BDS fixes, report inputs and outputs, and notify Plaspy of alarms or power events so the platform can display, alert, and store the data.

- Enables secure reporting of position and telemetry to Plaspy for live mapping and history
- Conveys device identity and status so Plaspy can associate data with the correct vehicle
- Transmits alarm events such as SOS, power loss, tampering, and ACC state changes
- Carries control acknowledgements and remote action confirmations where supported by the device
- Supports periodic heartbeats or keepalives so Plaspy maintains an accurate online view

## How Plaspy Detects the Protocol

Plaspy accepts device connections on a shared public endpoint and port and performs automated detection of the tracker protocol when a device connects and reports. In practice this means most G01 devices only need to be pointed to the Plaspy endpoint and use a supported transport to begin reporting without manual protocol selection inside Plaspy.

- Plaspy public server domain is d.plaspy.com for device reporting
- Plaspy public server IP is 54.85.159.138 and the service listens on port 8888
- The device may be configured to use either UDP or TCP on port 8888 depending on device support
- All devices in Plaspy use the same port so configuration is consistent across models
- Plaspy automatically detects the tracker protocol once the device sends identifiable reports
- Users typically do not need to choose a protocol manually in Plaspy if the device is correctly configured to report to d.plaspy.com on the proper transport

## Transport and Connection Context

Connection details frame how the G01 communicates over cellular networks to Plaspy. Transport selection and DNS or IP pointing are configuration choices on the device or during installation. Keeping these settings correct ensures the G01 reaches the Plaspy ingestion endpoint reliably.

- Devices may point to the Plaspy domain d.plaspy.com or directly to 54.85.159.138
- The public Plaspy port for all devices is 8888 and should be used for both TCP and UDP setups
- The G01 may be configured to use UDP or TCP depending on firmware and installer preference
- Use the correct APN and SIM settings on the device to ensure cellular data connectivity to the Plaspy endpoint
- Maintaining consistent transport and endpoint settings across a fleet simplifies onboarding and troubleshooting

## Protocol Compatibility Notes

- Firmware revisions can change timing, optional fields, and supported features; match firmware notes to expected behavior
- Hardware revisions may alter available inputs or outputs even for the same model designation
- Manufacturer default settings could point to a different server or port; verify device reporting configuration during setup
- Transport selection between UDP and TCP can affect delivery characteristics and should be chosen according to deployment needs
- Serial or local configuration interfaces such as UART may be used to set the reporting endpoint and transport where supported
- Always validate device reporting to d.plaspy.com or 54.85.159.138 on port 8888 before large scale deployment

## Why Protocol Understanding Matters

Understanding the tracker communication protocol helps ensure reliable setup, accurate telemetry in Plaspy, and faster troubleshooting when devices do not behave as expected. Clear protocol awareness also supports correct use of device inputs and remote controls in operational workflows.

- Ensures correct endpoint and transport configuration so devices reliably reach Plaspy
- Helps interpret why specific alarms or telemetry fields appear in Plaspy dashboards
- Aids troubleshooting for network issues, power events, and missed reports
- Supports planning for firmware updates and validating new firmware behavior
- Improves operational confidence when using immobilizer, SOS, and ACC driven workflows

## Why Use Plaspy with This Protocol

Using the GOTOP G01 with Plaspy gives organizations visibility into vehicle location, status inputs, and alarm events through a single ingestion endpoint and a consistent port strategy. The G01’s vehicle focused inputs like ACC detection, SOS alarm and remote cut-off are the kinds of signals that Plaspy ingests and presents for real time monitoring, alerts, and historical reporting.

If you want to learn more about how Plaspy works with device protocols and fleet management workflows, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes and configuration instructions, verify information with the manufacturer at https://www.gotop.cc/. Protocol support, firmware behavior and device implementation details can change over time so checking the manufacturer documentation ensures accurate and current integration guidance.
