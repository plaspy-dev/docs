---
slug: /cantrack/p60l/configuration
id: p60l-configuration
sidebar_label: Configuration
title: CanTrack - P60L Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for using the CanTrack P60L with Plaspy servers and platform integration
keywords:
  - CanTrack P60L configuration
  - CanTrack P60L setup
  - CanTrack P60L server configuration
  - P60L Plaspy setup
  - P60L GPS tracker configuration
  - Plaspy tracker configuration
  - personal tracker setup
  - P60L telemetry integration
  - Plaspy compatible devices
  - P60L OTA and SMS configuration
---

# CanTrack - P60L Configuration

This page describes the public configuration context for connecting the CanTrack P60L personal GPS tracker to Plaspy. It summarizes the practical server settings and the typical actions needed to prepare the device so that position, SOS, voice events and temperature telemetry flow into Plaspy dashboards and alerts.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol so you can use a single endpoint and port for multiple tracker models. Manufacturer side setup and the exact configuration steps can vary by firmware release, hardware revision, installation type, and available vendor tools, so use this guide together with the CanTrack documentation and your device tools.

## Configuration Overview

Configuring the P60L for Plaspy is primarily about pointing the tracker to the Plaspy server endpoint, selecting the correct transport, and validating that GNSS position fixes and telemetry upload successfully. The goal is to enable reliable real‑time tracking, SOS and telemetry reporting, and to allow Plaspy to visualize and alert on device data.

- Set the device server address and port to the Plaspy server values so the tracker sends TCP IP packets to the platform.
- Choose the transport method (UDP or TCP) if the tracker requires an explicit selection.
- Verify cellular connectivity and that the device can obtain GNSS fixes so location and telemetry are transmitted.
- Confirm the device reports SOS, voice, and temperature telemetry to Plaspy after configuration.
- Save settings and restart the tracker if required so the new server endpoint and transport take effect.

## Plaspy Server Settings

- Use server domain d.plaspy.com as the server host for device uploads
- Server IP address 54.85.159.138 can be used where IP entry is required
- Port 8888 is the Plaspy listening port for device connections
- Transport support UDP or TCP is available; select the transport your firmware requires
- Plaspy automatically detects the tracker protocol so the platform accepts compatible protocols on the shared port
- All devices in Plaspy use the same port so you can reuse port 8888 for supported tracker models

## Typical Requirements Before Setup

- A charged and functional P60L device with access to the manufacturer configuration interface or SMS command set
- Active cellular service and a valid SIM configured for data; LTE or GPRS coverage as required by the device
- Access to the official CanTrack configuration tool, companion app, or SMS command reference from the manufacturer
- GNSS visibility for the device to obtain initial position fixes during testing
- Administrative access to any gateway or firewall that could block outbound traffic to d.plaspy.com or to 54.85.159.138 on port 8888
- A plan for verifying SOS, voice and temperature reporting once the device appears in Plaspy

## How This Tracker Connects to Plaspy

The P60L transmits GNSS position fixes and sensor telemetry over the cellular link to the Plaspy endpoint, where the platform parses and stores device events for mapping, rules and alerting. The device can also buffer offline logs and upload them when connectivity is restored so Plaspy maintains continuity of history.

- The tracker is configured to report to the shared Plaspy server endpoint d.plaspy.com or 54.85.159.138
- Device data is sent to Plaspy on port 8888 using the selected transport UDP or TCP
- Plaspy automatically detects the tracker protocol and maps incoming device streams to the appropriate device record
- Telemetry such as SOS events, two way voice triggers and temperature readings are received and surfaced in Plaspy
- Offline logged points are uploaded to the Plaspy endpoint when the device regains connectivity

## Common Configuration Workflow

1. Access the official CanTrack configuration method such as the manufacturer software, companion app, or SMS command set.
2. Enter the Plaspy server host; use d.plaspy.com or supply 54.85.159.138 where numeric IP is required.
3. Set the device port to 8888 which Plaspy uses for all supported devices.
4. Choose UDP or TCP if the device requires explicit transport selection.
5. Apply or save the configuration changes in the device tool or via the SMS commands provided by CanTrack.
6. Restart the P60L if required by the firmware to apply network changes.
7. Validate that the device reports to Plaspy by confirming visibility in the platform and by testing a position fix, SOS event, or telemetry upload.

## Example Configuration Commands

The CanTrack P60L supports configuration via the manufacturer's configuration tools and an SMS command set, however exact command syntax and firmware behaviors vary by firmware and regional firmware builds. Because manufacturer commands and tools change over time, refer to the official CanTrack command reference for the precise SMS strings or PC tool operations that apply to your device and firmware version.

If you are using SMS configuration, the CanTrack documentation will list the exact SMS commands for setting server host, port, transport, APN values, and other parameters. Keep placeholders such as APN, username and password available from your mobile operator and enter them per the manufacturer instructions.

## Configuration Notes

- Firmware differences may change command syntax, available menu fields, and transport options; always check the P60L firmware release notes.
- Some installations use SMS commands while others use a PC or mobile configuration tool; use the method that your device firmware and vendor provide.
- TCP versus UDP selection can affect delivery guarantees and behavior under poor connectivity; choose the transport recommended for your use case and test behavior.
- Plaspy uses the same port 8888 across supported devices and performs automatic protocol detection to simplify multi device deployments.
- Keep APN and operator credentials on hand when configuring devices that require cellular data settings for outbound connectivity.

## Why Use Plaspy with This Configuration

Using the P60L with Plaspy lets organizations centralize real time location, SOS alerts, two way voice incidents and environmental telemetry in a single platform. For deployments that require reliable personal safety monitoring, elder or child tracking, or asset telemetry with temperature sensing and offline logging, the P60L provides the device capabilities and Plaspy provides visualization, alerting and operational workflows.

Learn more about Plaspy at https://www.plaspy.com and review CanTrack device specific details at https://www.cantrackgps.com/ to confirm the latest setup methods and firmware behavior. Manufacturer specifications, setup commands and firmware features evolve over time so verify device configuration steps with the official CanTrack documentation before large scale deployments.
