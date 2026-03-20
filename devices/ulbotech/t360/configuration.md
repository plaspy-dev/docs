---
slug: /ulbotech/t360/configuration
id: t360-configuration
sidebar_label: Configuration
title: Ulbotech - T360 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide for Ulbotech T360 tracker configuration with Plaspy server settings and setup steps for backend integration
keywords:
  - Ulbotech T360 configuration
  - Ulbotech T360 setup
  - T360 Plaspy configuration
  - T360 GPS tracker setup
  - Ulbotech tracker server settings
  - Plaspy tracker integration
  - GPS tracker configuration guide
  - OBD II GPS configuration
  - fleet tracking T360
  - vehicle telematics setup
---

# Ulbotech - T360 Configuration

This page documents the public configuration context for using the Ulbotech T360 OBD GPS tracker with Plaspy. It summarizes the Plaspy server values you need to apply on the device or with the device configuration tool and explains the practical steps to validate that the tracker is reporting to Plaspy. Use this guide together with Ulbotech documentation when applying settings to actual hardware.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer side setup steps can vary depending on firmware version, hardware revision, installation type, and vendor configuration tools. The T360 is compatible with Plaspy for straightforward backend integration and supports periodic and immediate position uploads, alarms, geo fence events, and driving behavior reports when configured to report to the Plaspy endpoint.

## Configuration Overview

The goal of configuring a T360 for Plaspy is to point the device at the Plaspy backend, ensure reliable cellular connectivity, and confirm the device appears and reports correctly in the platform. Configuration is typically performed with the manufacturer configuration utility, via physical connection, or by sending the device the required server settings.

- Set the T360 to report to the Plaspy server endpoint so position and event packets reach Plaspy.
- Verify the device has a working SIM and cellular data access so GPRS uploads can succeed.
- Choose the transport option required by the device firmware and save the configuration.
- Validate connectivity and incoming messages in Plaspy to confirm visibility and telemetry ingestion.
- Keep firmware and APN settings current to reduce setup issues and maintain reliable reporting.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support using UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol for incoming device messages
- Note that all devices in Plaspy use the same port for device connections

## Typical Requirements Before Setup

- Easy access to the vehicle OBD II port for installation and removal of the T360 device.
- A working standard SIM card with an active data plan and correct APN for the region.
- Access to the official Ulbotech configuration method such as micro USB connection, configuration software, or the vendor provided tools.
- Power applied to the device and adequate cellular coverage at the installation location.
- Credentials or account access to Plaspy for device registration and visibility checks, if required by your deployment workflow.
- Confirmation of the device firmware version and compatibility with Plaspy integration practices.

## How This Tracker Connects to Plaspy

When configured, the T360 sends GPS positions, accelerometer events, and alarm messages to the Plaspy backend over GPRS. The device must be pointed at the Plaspy endpoint and use the agreed port and transport so the platform can ingest and process telemetry automatically.

- The T360 is configured to report to the shared Plaspy server endpoint at d.plaspy.com or its IP 54.85.159.138.
- All traffic from the device is sent to port 8888 on the Plaspy endpoint.
- Transport can be UDP or TCP depending on device firmware and configuration choices.
- Once received, Plaspy automatically detects the tracker protocol and maps incoming messages to the correct device record.
- Telemetry such as position updates, geo fence events, alarms, and driving behavior reports become available in Plaspy dashboards and alerts.

## Common Configuration Workflow

1. Access the official Ulbotech configuration method or software for the T360, such as the vendor utility, micro USB interface, or documented SMS commands.
2. Enter the Plaspy server domain d.plaspy.com or the IP 54.85.159.138 in the server address field of the device configuration.
3. Set the device port to 8888 as the destination port for reporting.
4. Choose the transport mode UDP or TCP if the device requires an explicit transport selection.
5. Configure or verify APN settings so the T360 can establish GPRS data connectivity if needed.
6. Apply or save the configuration and, if required by the device, restart the tracker to activate the new settings.
7. Validate that the device reports to Plaspy by checking the device list and recent telemetry in Plaspy after the tracker has rebooted.

## Example Configuration Commands

The T360 modelConfiguration content is not provided here, so exact command syntax depends on Ulbotech firmware and the official configuration method. Ulbotech provides configuration tools and documented commands for setting server, port, transport, and APN values. Use the manufacturer utility or the device manual to apply the following items as appropriate:

- Set server to d.plaspy.com or 54.85.159.138
- Set destination port to 8888
- Select UDP or TCP as transport if required
- Configure APN and save settings
- Restart device if the firmware requires a reboot to apply changes

Consult Ulbotech documentation for precise command formats or contact your vendor for the correct command set for your firmware revision.

## Configuration Notes

- Firmware differences across production batches can change the configuration interface or command syntax; always confirm the firmware version before applying settings.
- The T360 supports auto APN detection, but it is good practice to verify and explicitly set the APN when devices fail to connect.
- Choose UDP for lower overhead where permitted, or TCP where ordered delivery and session management are preferred; Plaspy will accept both transports on port 8888.
- Plaspy automatically detects the tracker protocol once it receives packets, which simplifies backend onboarding.
- Keep the device firmware updated using FOTA when available to benefit from protocol fixes and stability improvements.

## Why Use Plaspy with This Configuration

Using the Ulbotech T360 with Plaspy provides a straightforward path to fleet visibility and event monitoring. The plug and play OBD II form factor reduces installation time while the T360 telematics feed supplies position updates, driving behavior events, and alarm notifications that Plaspy ingests for dashboards, alerts, and reporting workflows. For fleet operators and vehicle owners who need operational oversight, the combination of the T360 hardware and Plaspy backend delivers practical telemetry and anti theft support.

To learn more about Plaspy and how it handles device integration visit https://www.plaspy.com. Device specific configuration steps, firmware behavior, and manufacturer details can change over time so verify the current setup instructions with Ulbotech at http://www.ulbotech.com/ before wide scale deployment.
