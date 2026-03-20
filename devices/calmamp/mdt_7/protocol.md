---
slug: /calmamp/mdt_7/protocol
id: mdt_7-protocol
sidebar_label: Protocol
title: CalmAmp - MDT-7 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for CalmAmp MDT-7 tracker integration with Plaspy including connection settings and compatibility guidance
keywords:
  - CalmAmp MDT-7 protocol
  - CalmAmp MDT-7 GPS protocol
  - MDT-7 Plaspy compatibility
  - MDT-7 communication protocol
  - MDT-7 tracking protocol
  - CalmAmp tracker integration
  - MDT-7 fleet management
  - GPS tracker protocol Plaspy
  - CalmAmp protocol guide
  - vehicle tracking MDT-7
---

# CalmAmp - MDT-7 Protocol

This page describes the public protocol context for using the CalmAmp MDT-7 with Plaspy. It focuses on how the device communicates over the network to deliver location, telematics, and application data to a Plaspy server and the practical connection settings you should confirm when integrating MDT-7 devices into your fleet.

The MDT-7 is an open Android based mobile data terminal that works with CalAmp LMU connectivity to transport messages and captured information over the cellular network. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation. Always validate device specific sending options and firmware notes with the device vendor when preparing an integration.

## Protocol Overview

The communication protocol for MDT-7 deployments defines how the terminal and its connected LMU send telemetry, location, and application messages to a remote server. In practice this protocol enables the MDT-7 platform to identify the device, report position and status, and transport driver or workflow data that can be consumed by Plaspy for tracking and operational use.

- Enables the MDT-7 and its connected LMU to deliver GPS and telemetry to a remote endpoint
- Carries device identity and session information that Plaspy uses to associate reports with fleet assets
- Transports application data captured on the MDT-7 such as messages, events, and media references
- Operates over the cellular link provided by the connected LMU to reach Plaspy servers
- Allows downstream systems to map device reports to vehicle workflows and dispatch systems

## How Plaspy Detects the Protocol

Plaspy provides a shared network endpoint and port for all supported devices and automatically detects the tracker protocol once a device is correctly configured to report to Plaspy. For most MDT-7 setups you do not need to manually select a protocol within Plaspy as long as the device is pointed at the Plaspy endpoint and uses an allowed transport.

- Point the device or its connected LMU to d.plaspy.com or 54.85.159.138 and use port 8888
- Plaspy accepts reports on the same port for all devices which simplifies onboarding
- The device may be configured to use UDP or TCP depending on the LMU and network settings
- When reporting is configured correctly a device will arrive in Plaspy without manual protocol selection
- Verify device reporting settings and any manufacturer guidance if detection does not occur

## Transport and Connection Context

Connection options determine how MDT-7 messages reach Plaspy. The MDT-7 platform typically sends application data through a connected CalAmp LMU which then transmits across the cellular network to Plaspy. Plaspy listens on a single shared port for device traffic and supports both common transport methods.

- Devices may be configured to use either UDP or TCP on port 8888
- The Plaspy server endpoint can be addressed as d.plaspy.com or 54.85.159.138
- All devices supported by Plaspy use the same port which reduces configuration overhead
- DNS based addressing to d.plaspy.com or direct IP can be used, depending on device and carrier behavior
- Ensure firewall and carrier APN settings allow outbound traffic to the Plaspy endpoint on port 8888

## Protocol Compatibility Notes

- Firmware revisions on the MDT-7 and the connected LMU can change reporting behavior and available features
- Hardware revisions and optional modules may affect which data fields are reported from the device
- Manufacturer side configuration in MDT-7 applications or LMU provisioning determines transport and server address
- Choosing UDP versus TCP depends on the LMU support and the reliability characteristics required by your workflows
- Always verify that the device is configured to send to d.plaspy.com or 54.85.159.138 on port 8888
- Confirm compatibility and any required settings by consulting the official CalmAmp documentation for your firmware level

## Why Protocol Understanding Matters

Understanding how the MDT-7 communicates helps ensure successful setup, predictable message delivery, and smoother troubleshooting when devices are deployed in production. Knowing the connection and reporting expectations reduces integration friction and helps you align device configuration with Plaspy ingestion.

- Speeds initial deployment by confirming server address and transport settings ahead of time
- Reduces false alarms by aligning reporting intervals and event filters with operational needs
- Helps narrow down connectivity issues between device, carrier APN, and Plaspy endpoint
- Supports planning for firmware updates and hardware revisions that may affect behavior
- Improves long term reliability by documenting the expected reporting flow for operations teams

## Why Use Plaspy with This Protocol

Using the CalmAmp MDT-7 together with Plaspy gives organizations a way to centralize vehicle and driver data from a capable Android terminal into a fleet management platform. The MDT-7’s application ecosystem and media capture features combined with Plaspy’s automatic protocol detection and shared connection settings can simplify fleet visibility and operational workflows.

If you want to learn more about how Plaspy handles device connectivity and fleet management, visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and implementation guidance consult the manufacturer documentation at http://www.calamp.com/ as protocol support and firmware behavior can change over time.
