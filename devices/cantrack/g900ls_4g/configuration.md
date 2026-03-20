---
slug: /cantrack/g900ls_4g/configuration
id: g900ls_4g-configuration
sidebar_label: Configuration
title: CanTrack - G900LS-4G Configuration
sidebar_class_name: menu_item_tracker
description: Practical public configuration guidance for connecting the CanTrack G900LS-4G tracker to Plaspy using shared server settings
keywords:
  - CanTrack G900LS-4G configuration
  - G900LS-4G setup Plaspy
  - CanTrack configuration guide
  - G900LS-4G server configuration
  - Plaspy tracker integration
  - GPS tracker platform setup
  - GT06 protocol Plaspy
  - vehicle tracking configuration
  - G900LS-4G telemetry setup
  - fleet management tracker setup
---

# CanTrack - G900LS-4G Configuration

This page covers the public configuration context for using the CanTrack G900LS-4G tracker with the Plaspy platform. It collects the practical server values and workflow guidance you will need to point the device at Plaspy and validate communication so the tracker can report location and telemetry to your Plaspy account.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device reports. Exact manufacturer-side setup steps can vary by firmware release, hardware revision, installation type, or vendor configuration tools, so follow the general process below and also verify device-specific instructions from CanTrack when required.

## Configuration Overview

The goal of this configuration is to prepare the G900LS-4G to send position and event data to Plaspy using the platform's shared server endpoint and port. The steps focus on entering Plaspy server values, confirming mobile data connectivity, and validating reporting so the device becomes visible and functional in Plaspy.

- Configure the tracker to use Plaspy as its reporting server endpoint.
- Ensure the tracker has a working SIM and mobile data so it can use LTE or GSM data reporting.
- Set the device transport and port to match Plaspy requirements and save the settings.
- Restart or power cycle the tracker if the manufacturer tool requires it to apply changes.
- Validate connectivity by confirming the device reports to Plaspy and appears in the platform.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the G900LS-4G. Plaspy requires the same port for all supported devices and automatically detects the tracker protocol when the device connects.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP depending on device options
- Plaspy automatically detects the tracker protocol so no protocol selection is required on the server side

## Typical Requirements Before Setup

- A powered and accessible G900LS-4G unit with the appropriate wiring for installation.
- An active cellular SIM with data enabled and sufficient coverage for LTE or GSM networks supported by the device.
- Knowledge of the device configuration method provided by CanTrack such as a manufacturer app, web configuration tool, or SMS/serial commands.
- APN details from the SIM provider if required by the device for GPRS or LTE data connectivity.
- Access to the device so you can apply settings, save changes, and perform a restart if necessary.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the G900LS-4G sends its GPS positions and telemetry packets to the shared Plaspy server endpoint and port. Plaspy ingests those messages and maps them to the appropriate device record based on the device identifier and protocol the tracker uses.

- The tracker is pointed to d.plaspy.com or 54.85.159.138 and sends data to port 8888.
- The device may use either UDP or TCP transport when sending packets depending on the configuration available.
- Plaspy automatically detects the tracker protocol on incoming connections so the platform can parse GT06-style or TCP/IP packets.
- Reported data typically includes position, speed, ignition status, alarms, and relay state for use in Plaspy maps, alerts, and reports.

## Common Configuration Workflow

1. Access the official CanTrack configuration method or software for the G900LS-4G such as the vendor app, web tool, or SMS/serial command interface.
2. Insert and verify an active SIM card with data and confirm APN settings if required.
3. Enter d.plaspy.com or alternatively 54.85.159.138 as the server address in the device configuration.
4. Set the device port to 8888 for reporting to Plaspy.
5. Choose UDP or TCP if the device requires a transport selection for outgoing packets.
6. Apply or save the configuration settings in the device tool.
7. Restart or power cycle the tracker if the manufacturer instructions recommend it to activate new settings.
8. Validate that the device reports to Plaspy by checking visibility and recent telemetry in the Plaspy platform.

## Example Configuration Commands

The exact commands or SMS strings for setting server, port, and APN vary by CanTrack firmware and the configuration tool you use. Because manufacturer methods differ across revisions and regional firmware, follow CanTrack documentation or your vendor tool for precise command syntax. If you use SMS configuration, the vendor manual typically provides the SMS templates to set server, port, and APN.

## Configuration Notes

- Firmware variations may change command syntax or the location of settings in vendor tools; always check CanTrack release notes for your hardware revision.
- If the device offers both UDP and TCP, choose the transport supported by your installation. Plaspy accepts either and detects the protocol automatically on connection.
- Confirm APN, username, and password with your SIM provider if mobile data is required; some devices require APN values before GPRS/LTE data will connect.
- When using a remote relay or immobilizer function, verify wiring and safety procedures and confirm that commands and reports for relay state are enabled in the device profile.
- The G900LS-4G uses GT06-series protocol and standard TCP/IP reporting which is compatible with Plaspy parsing when the tracker reports to the shared server endpoint.

## Why Use Plaspy with This Configuration

Using the CanTrack G900LS-4G with Plaspy gives operators a straightforward way to collect real-time location, ignition events, alarms, and relay states across mixed fleets. Pointing the device at Plaspy's shared server and port enables centralized visibility, alerting, and reporting without per-device server complexity.

To learn more about Plaspy and how it ingests device telemetry, visit https://www.plaspy.com. For the most current device specific setup details, firmware behavior, and manufacturer commands for the G900LS-4G, verify the official CanTrack documentation at https://www.cantrackgps.com/ as vendor methods can change over time.
