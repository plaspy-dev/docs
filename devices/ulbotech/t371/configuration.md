---
slug: /ulbotech/t371/configuration
id: t371-configuration
sidebar_label: Configuration
title: Ulbotech - T371 Configuration
sidebar_class_name: menu_item_tracker
description: Guide to configuring the Ulbotech T371 GPS tracker for use with Plaspy server settings and integration best practices
keywords:
  - Ulbotech T371 configuration
  - Ulbotech T371 setup for Plaspy
  - Ulbotech T371 server configuration
  - Ulbotech T371 GPS tracker configuration
  - Ulbotech OBD II tracker setup
  - Plaspy tracker configuration
  - Plaspy integration guide
  - fleet tracking Ulbotech T371
  - vehicle telemetry T371
  - T371 GPS platform setup
---

# Ulbotech - T371 Configuration

This page documents the public configuration context for using the Ulbotech T371 with Plaspy. It summarizes the practical server settings Plaspy requires, the typical preparatory steps, and the high level workflow required to point an Ulbotech T371 at Plaspy for centralized tracking and telemetry. Information here is practical and intended for installers, integrators, and fleet administrators preparing the device for Plaspy integration.

Plaspy uses shared server settings across all supported devices and automatically detects the tracker protocol once a device connects. Manufacturer side configuration steps for the T371 can vary by firmware version, hardware revision, installation type, and the vendor configuration tools you use. Use this guide to understand the required Plaspy endpoint and common workflow, and consult Ulbotech documentation for device specific commands and firmware details.

## Configuration Overview

Configuring the T371 for Plaspy prepares the device to send GNSS positions and vehicle telemetry to Plaspy so you can monitor vehicles and diagnostics centrally. The configuration process focuses on pointing the tracker at the Plaspy endpoint, ensuring reliable cellular connectivity, and confirming the device is visible within the Plaspy platform.

- Set the device to report to the Plaspy server endpoint and port so data is routed to your Plaspy account.
- Confirm the device has active cellular connectivity and a working Micro USIM with data access.
- Validate that the tracker reports GNSS positions and OBD telemetry to Plaspy after configuration.
- Save or apply configuration and restart the tracker when required to activate new server settings.
- Use the Plaspy platform to verify device visibility, telemetry fields, and event reporting.

## Plaspy Server Settings

Use the following Plaspy server settings when configuring the Ulbotech T371:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport options supported UDP or TCP
- Plaspy automatically detects the tracker protocol when the device connects

Note that Plaspy uses the same port for all supported devices and relies on automatic protocol detection to identify the tracker protocol after connection.

## Typical Requirements Before Setup

- Access to the vehicle OBD II port and a correctly seated T371 OBD II connector for power and OBD telemetry.
- A functioning Micro USIM installed with an active data plan and adequate cellular coverage on the installation network.
- Access to the manufacturer configuration method or software for the T371 such as the vendor configuration utility via micro USB or approved provisioning tools.
- Knowledge of APN settings for the SIM if automatic APN detection does not succeed for your carrier.
- A Plaspy account or administrator access to the Plaspy platform to confirm device provisioning and telemetry mapping.
- Device firmware version information and access to Ulbotech documentation to follow any model or firmware specific steps.

## How This Tracker Connects to Plaspy

The Ulbotech T371 streams GNSS positions and OBD telemetry to Plaspy over the cellular network using the device cellular modem. The T371 is configured to report to the shared Plaspy server endpoint and port so Plaspy can ingest location, diagnostics, and event data for central monitoring.

- The device pushes location updates and telemetry to d.plaspy.com or 54.85.159.138 on port 8888.
- Transport can be configured as UDP or TCP depending on the tracker configuration method; Plaspy accepts both.
- Plaspy automatically detects the tracker protocol when the T371 connects, so the platform interprets incoming messages correctly.
- OBD II telemetry such as RPM, speed, engine status, and diagnostic trouble codes is sent along with GNSS data for visualization in Plaspy.
- Accelerometer events and the internal immobilizer state can be transmitted for alerts and control workflows in Plaspy.

## Common Configuration Workflow

1. Access the official Ulbotech T371 configuration method or software using the vendor tool, micro USB interface, or approved provisioning service.
2. In the device server or network settings, enter the Plaspy server as either the domain d.plaspy.com or the IP 54.85.159.138.
3. Set the device port to 8888. Plaspy uses this same port across all supported devices.
4. Choose UDP or TCP as the transport if the device requires an explicit transport selection.
5. Apply or save the configuration in the device provisioning tool and confirm settings were written successfully.
6. Restart the T371 if required by the manufacturer or provisioning tool to activate the new server settings.
7. Validate that the device is reporting to Plaspy by checking device visibility, recent position updates, and telemetry in the Plaspy platform.

## Example Configuration Commands

The exact configuration commands and provisioning strings for the Ulbotech T371 depend on the manufacturer firmware and the provisioning method you use. Because manufacturer commands and utilities vary between firmware revisions and vendor tools, consult Ulbotech configuration guides for T371 specific command syntax.

If you are using a vendor tool, follow its instructions to enter the following Plaspy settings in the equivalent fields:
- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: UDP or TCP

If Ulbotech provides SMS or serial command strings for server configuration in your firmware version, enter the domain or IP and port values exactly as shown above. Always preserve any placeholders the manufacturer uses for APN or credentials.

## Configuration Notes

- Firmware differences can change how the T371 accepts server settings; always confirm the required command syntax in the Ulbotech T371 manual for your firmware version.
- Many installations rely on the T371 automatic APN detection, but keep carrier APN details available if manual configuration is needed.
- Selecting TCP versus UDP can affect message delivery characteristics; pick the transport required by your provisioning policy and confirm delivery in Plaspy.
- The Plaspy server port is universal across supported trackers, which simplifies provisioning when managing mixed fleets.
- For OTA firmware updates and advanced provisioning, follow Ulbotech FOTA procedures to avoid interrupting device connectivity.

## Why Use Plaspy with This Configuration

Using the Ulbotech T371 with Plaspy gives fleets centralized visibility into vehicle location and rich OBD telemetry. The T371’s plug and play OBD II form factor speeds installation while the Telit cellular modem and u‑blox GNSS provide reliable connectivity and accurate positioning for real time monitoring and analytics in Plaspy.

Learn more about Plaspy and how the platform supports device integration at https://www.plaspy.com. For the most current device specific setup instructions, firmware notes, and manufacturer configuration commands, verify details with Ulbotech at http://www.ulbotech.com/ as manufacturer procedures and firmware behavior can change over time.
