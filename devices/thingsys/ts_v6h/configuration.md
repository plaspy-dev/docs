---
slug: /thingsys/ts_v6h/configuration
id: ts_v6h-configuration
sidebar_label: Configuration
title: ThingSys - TS-V6H Configuration
sidebar_class_name: menu_item_tracker
description: Practical configuration guide for ThingSys TS-V6H tracker with Plaspy server settings and SMS commands
keywords:
- ThingSys TS-V6H configuration
- TS-V6H setup
- ThingSys GPS tracker configuration
- TS-V6H Plaspy setup
- Plaspy tracker configuration
- Vehicle GPS tracker setup
- Fleet management tracker configuration
- TS-V6H server settings
- TS-V6H SMS configuration
- GPRS tracker configuration
---

# ThingSys - TS-V6H Configuration

This page provides the public configuration context for using the ThingSys TS-V6H GPS tracker with the Plaspy platform. It covers the practical server settings and the example SMS commands published for the model so you can prepare the device for live reporting to Plaspy. The TS-V6H supports GPRS reporting and SMS-based setup, and its core telemetry features such as ACC ignition detection, vibration tamper alerts, and a backup battery are described in the device documentation.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools, so treat the SMS command examples here as public, typical guidance and verify the exact workflow for your hardware and firmware release.

## Configuration Overview

The goal of configuration is to prepare the TS-V6H to reliably report location and status to Plaspy using GPRS with SMS as a fallback, and to confirm the device is visible in the Plaspy platform. The practical configuration steps ensure the tracker points to Plaspy server endpoints, uses the required port and transport, and that connectivity is validated after deployment.

- Point the device to the Plaspy server endpoint so location and telemetry are delivered to Plaspy.
- Configure cellular APN credentials and ensure the SIM provides data and SMS services.
- Choose the transport method supported by your firmware and confirm it uses Plaspy port 8888.
- Validate connectivity and confirm the device appears in Plaspy monitoring and reports telemetry.
- Use SMS commands if you cannot access the device through a local configuration tool or when installer access is limited.

## Plaspy Server Settings

- Server domain d.plaspy.com should be entered on the device or in the carrier settings when supported.  
- Server IP 54.85.159.138 is the Plaspy endpoint address available for tracker configuration.  
- Port 8888 is the port used by Plaspy for all supported devices. All devices in Plaspy use the same port.  
- Transport support for UDP or TCP is available; the TS-V6H may be configured using either UDP or TCP on port 8888 depending on firmware options.  
- Plaspy automatically detects the tracker protocol when the device connects so the platform can ingest data without manual protocol selection on the server side.

## Typical Requirements Before Setup

- A powered TS-V6H unit with manufacturer installation completed and proper wiring to vehicle power.  
- An active SIM card with data and SMS enabled and sufficient balance for initial configuration and reporting.  
- Access to the device phone number or the installer tool required to send SMS configuration commands.  
- Knowledge of the device default password if required for SMS commands or manufacturer tools. The public example uses 123456 as the default device password.  
- Manufacturer documentation or configuration tool access for firmware specific commands and behavior.

## How This Tracker Connects to Plaspy

When configured to use Plaspy, the TS-V6H reports position and device status to the shared Plaspy server endpoint on the shared port. Plaspy ingests these messages and provides live mapping, alerts, and historical reporting for fleet monitoring and anti-theft workflows.

- The device sends GPRS messages to d.plaspy.com or to the Plaspy IP 54.85.159.138 on port 8888.  
- Transport can be UDP or TCP depending on device configuration and firmware capabilities.  
- Plaspy automatically detects the tracker protocol so the platform can parse incoming messages.  
- Events such as ignition on/off, vibration tamper alerts, and power-loss notifications are reported to Plaspy for rules and alerts.  
- SMS remains available as a fallback for location queries or out-of-band configuration when needed.

## Common Configuration Workflow

1. Access the official ThingSys configuration method or software for the TS-V6H, or prepare to send SMS configuration commands as published by the manufacturer.  
2. Enter the Plaspy server domain d.plaspy.com or use the Plaspy server IP 54.85.159.138 in the device server settings.  
3. Set the server port to 8888 which is the standard port Plaspy uses for all supported trackers.  
4. Choose UDP or TCP if the device requires selection of a transport protocol; select the one recommended by your firmware or installer guide.  
5. Configure APN credentials and any required username and password so the device can establish a GPRS data session.  
6. Apply or save the configuration and restart the device if the firmware requires a reboot to apply changes.  
7. Validate that the device reports successfully to Plaspy by checking the device list and recent telemetry in the Plaspy platform.

## Example Configuration Commands

The TS-V6H can be configured using SMS commands. The following public commands are published by the manufacturer as example SMS messages. The sample setup uses the device default password 123456 where indicated. Preserve placeholders when sending real values.

- Factory reset command (optional initial step to restore defaults)
```text
FORMAT
```
- Set the operator APN
```text
apn123456 [apn]
```
- Set the APN username
```text
apnuser123456 [apnu]
```
- Set the APN password
```text
apnpasswd123456 [apnp]
```
- Set the GPRS server to the Plaspy IP with port 8888
```text
ip54.85.159.138 8888
```
- Check current settings (verification command)
```text
CXZT
```

Notes on placeholders and usage
- [apn] replace with your mobile operator APN string.  
- [apnu] replace with the APN username if required by your operator, otherwise leave blank or omit according to the device manual.  
- [apnp] replace with the APN password if required.  
- The default device password shown in public examples is 123456 when a password prefix is required by command syntax. Confirm your device's current password before sending commands.  
- Send these SMS commands to the device phone number as described in the ThingSys documentation for SMS configuration.

## Configuration Notes

- Firmware differences can change command syntax and available options; always check the device firmware release notes.  
- Installer practices vary by region and vendor; some installers prefer using a local configuration tool instead of SMS for batch deployment.  
- Choosing UDP or TCP depends on firmware and network reliability; UDP is common for minimal overhead while TCP may be chosen where delivery confirmation matters.  
- SMS based setup is supported and useful for remote configuration, but ensure SMS delivery and command success by checking the device response or using the CXZT verification command.  
- Remember that Plaspy uses the same port for all devices and automatically detects the protocol, so server-side configuration on Plaspy is uniform.

## Why Use Plaspy with This Configuration

Using the ThingSys TS-V6H with Plaspy provides a straightforward path to real time vehicle visibility, tamper and power-loss alerts, and fleet operational monitoring. The combination of GPRS reporting with SMS fallback and the device inputs for ignition and vibration detection makes the TS-V6H suitable for fleet, rental, and security oriented deployments where continuous tracking and event based alerts are required.

To learn more about Plaspy, visit https://www.plaspy.com and review platform features, onboarding options, and supported device lists. For the latest device specific configuration commands, firmware behavior, and manufacturer details, verify setup information on the ThingSys official website https://www.thingsys.com/ as manufacturer methods and command syntax can change over time.
