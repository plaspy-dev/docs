---
slug: /gotop/g23n/configuration
id: g23n-configuration
sidebar_label: Configuration
title: GOTOP - G23N Configuration
sidebar_class_name: menu_item_tracker
description: Public guidance for configuring GOTOP G23N to work with Plaspy using shared server settings and practical setup steps
keywords:
  - GOTOP G23N configuration
  - GOTOP G23N setup
  - GOTOP G23N Plaspy
  - G23N NB IoT configuration
  - GOTOP tracker configuration
  - G23N server configuration
  - G23N GPS tracker setup
  - GOTOP integration with Plaspy
  - G23N fleet management setup
  - GOTOP G23N installation
---

# GOTOP - G23N Configuration

This page provides public configuration context and practical guidance for using the GOTOP G23N tracker with Plaspy. It focuses on the shared server settings and the typical manufacturer-side steps needed to point a G23N running NB‑IoT telemetry to the Plaspy platform, using the device description above as the factual grounding.

Plaspy uses shared server settings across supported devices and automatically detects tracker protocols at the platform edge. Exact manufacturer configuration steps can vary by firmware revision, hardware revision, installation type, and vendor tools; this page explains the Plaspy-side values and a practical workflow to apply them using the official GOTOP configuration method or compatible tools.

## Configuration Overview

Configuring the G23N for Plaspy means preparing the device so its NB‑IoT telemetry and vehicle I/O report to Plaspy's shared server endpoint and port. The goal is straightforward: ensure the G23N can connect to Plaspy, send location and event messages, and appear correctly in the Plaspy fleet dashboard.

- Point the device to the Plaspy server endpoint so NB‑IoT packets are delivered to Plaspy for processing.
- Configure the transport and port on the tracker to match Plaspy settings and save the device configuration.
- Verify NB‑IoT network and APN/operator provisioning so the Quectel BC26 can transmit data.
- Use the device UART‑TTL configuration interface or the official GOTOP tool to apply settings and perform verification.
- Restart or power cycle the tracker when required and validate that Plaspy receives the first telemetry packets.
- Confirm that ACC, power loss, and remote cut outputs map to the expected events in Plaspy.

## Plaspy Server Settings

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: support for UDP or TCP on port 8888 (device may be configured to use either)
- Plaspy uses the same port for all supported devices and automatically detects the tracker protocol

## Typical Requirements Before Setup

- A powered G23N unit with access to its UART‑TTL configuration interface or the official GOTOP configuration tool
- NB‑IoT network coverage and correct operator provisioning for the Quectel BC26 module
- Knowledge of the device firmware version and any vendor configuration utilities required for the G23N
- A way to safely power cycle or restart the device after applying configuration changes
- Access to Plaspy platform account or administrative access to validate that the device appears and reports correctly
- Basic cabling and mounting readiness for testing ACC, power detection, and the low output if checking hardware I O mapping

## How This Tracker Connects to Plaspy

The G23N uses NB‑IoT telemetry to send GNSS and device event messages to Plaspy. Once configured to target Plaspy's server endpoint and port, the tracker transmits periodic location updates and alarm or I O status messages so Plaspy can present those events in live maps, routes, and reports.

- The G23N sends location and telemetry over NB‑IoT to d.plaspy.com or 54.85.159.138 on port 8888
- Transport may be configured as UDP or TCP depending on the device option; Plaspy accepts either on port 8888
- Plaspy automatically detects the tracker protocol and processes messages for live visibility and event handling
- Vehicle inputs such as ACC and power loss are sent as event messages and mapped to Plaspy rules and alarms
- Remote low output events (power/fuel cut) can be activated from the platform when appropriate and supported by installation

## Common Configuration Workflow

1. Access the official GOTOP configuration method or software for the G23N, typically via UART‑TTL or the vendor tool.
2. In the device server settings, enter d.plaspy.com or the Plaspy server IP 54.85.159.138 as the target host.
3. Set the device port to 8888 (Plaspy uses this same port for all devices).
4. Choose the transport protocol UDP or TCP if the device requires a transport selection.
5. Save or apply the configuration using the GOTOP configuration tool or the device command interface.
6. Restart or power cycle the G23N if the device requires a reboot to apply server changes.
7. Validate connectivity by confirming the device reports to Plaspy and that location and event messages appear on the platform.

## Example Configuration Commands

The G23N is commonly configured via the manufacturer tool or the UART‑TTL interface. Exact commands and their syntax depend on the firmware and the GOTOP configuration utility, so the specific command set can vary. If you have the official GOTOP command list from the vendor, apply the commands in the order the manufacturer recommends while ensuring the host and port are set to the Plaspy values listed above.

If you require examples for a particular firmware or tool, consult the official GOTOP configuration instructions provided with the device or contact your vendor for the command set appropriate for your revision.

## Configuration Notes

- Firmware differences may change command syntax and available settings; always confirm the correct command set for your device firmware.
- NB‑IoT operator provisioning and APN settings are required for the Quectel BC26 to transmit; ensure the SIM and operator profile support NB‑IoT.
- Choose UDP or TCP based on your installation and the device tool options; Plaspy accepts both on port 8888 and will detect the protocol automatically.
- Use UART‑TTL only with appropriate level shifting and safety procedures; improper wiring may damage the device.
- Confirm event mapping for ACC, power loss, and remote cut output in both the device configuration and Plaspy so alarms and controls behave as expected.

## Why Use Plaspy with This Configuration

Using the GOTOP G23N with Plaspy provides a simple path to vehicle visibility, telemetry, and alarm handling for fleets that benefit from low‑power NB‑IoT connectivity. The shared Plaspy endpoint and automatic protocol detection simplify onboarding so that once the G23N points to the Plaspy server and port, location and event data flow into Plaspy dashboards for monitoring and reporting.

Learn more about Plaspy and how it can centralize fleet data and alarms at https://www.plaspy.com. For the latest device specific configuration methods, firmware notes, and installation guidance, verify details on the manufacturer site https://www.gotop.cc/ since firmware behavior and setup procedures can change over time.
