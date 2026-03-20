---
slug: /cantrack/g07l/configuration
id: g07l-configuration
sidebar_label: Configuration
title: CanTrack - G07L Configuration
sidebar_class_name: menu_item_tracker
description: Configure the CanTrack G07L tracker for Plaspy with practical server settings and setup steps for reliable fleet tracking
keywords:
  - CanTrack G07L configuration
  - CanTrack G07L setup
  - G07L Plaspy configuration
  - CanTrack tracker configuration
  - GPS tracker setup Plaspy
  - G07L server settings
  - vehicle tracker configuration
  - G07L installation guide
  - CanTrack telemetry setup
  - fleet tracking G07L
---

# CanTrack - G07L Configuration

This page provides public configuration guidance for using the CanTrack G07L GPS tracker with the Plaspy platform. It summarizes the practical server settings, common setup steps, and integration context needed to make the G07L report location and status to Plaspy for live tracking, alerts, and reporting.

Plaspy uses shared server settings across all supported devices and automatically detects the tracker protocol when the device connects. Manufacturer-side configuration steps can vary by firmware version, hardware revision, installation type, or vendor tools, so use this page as a public, practical reference and verify any device-specific details in the official CanTrack documentation.

## Configuration Overview

The configuration process prepares the G07L to send GNSS fixes, alarms, and status data to Plaspy over cellular data. The objective is to point the device at Plaspy's ingestion endpoint, confirm connectivity, and validate that reports appear in the Plaspy platform.

- Set the device to report to Plaspy's server endpoint so telemetry reaches d.plaspy.com on the shared Plaspy port.
- Ensure the correct transport (UDP or TCP) is selected if the device requires an explicit choice.
- Provide a working SIM and correct APN settings so the tracker has internet access for LTE or GSM fallback.
- Save and apply configuration then verify that the device appears and reports in Plaspy.
- Use manufacturer tools (USB, SMS, or GPRS commands) as supported by the G07L for initial provisioning and troubleshooting.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol
- All devices in Plaspy use the same port for telemetry ingestion

## Typical Requirements Before Setup

- Confirm a stable vehicle power connection within the G07L working range and proper permanent installation.
- Install a data-capable SIM card and verify account data, APN, and voice/SMS settings as required for your region and operator.
- Access to the official CanTrack configuration methods supported by the device such as USB, SMS, or GPRS/PC tools for provisioning.
- A Plaspy account or organization access for device onboarding and verification of the device once it reports.
- Knowledge of the device firmware version and any manufacturer release notes that could affect command syntax or behavior.
- Basic tools for wiring and testing including a multimeter and a way to monitor live device logs or platform events.

## How This Tracker Connects to Plaspy

When configured, the G07L streams GNSS fixes, status events, and alarm messages to the shared Plaspy endpoint and port. Plaspy ingests those packets and maps them into live position updates, alert workflows, and historical reports for fleet monitoring.

- The tracker reports GNSS fixes and movement/status events to d.plaspy.com at port 8888.
- Transport may be UDP or TCP depending on device selection; Plaspy detects the tracker protocol automatically.
- Alarm events such as movement, ignition changes, and power-cut alerts are delivered to Plaspy for event-driven notifications.
- Onboard buffering stores records when connectivity is lost and those records upload automatically when the device reconnects.
- Telemetry and status updates become visible in Plaspy dashboards for real-time tracking and reporting.

## Common Configuration Workflow

1. Access the official CanTrack configuration method or software for the G07L (USB tool, SMS commands, or GPRS/PC interface) according to the manufacturer instructions.
2. Provide a working SIM and confirm APN and network registration so cellular data is available for LTE or GSM fallback.
3. Enter the Plaspy endpoint: d.plaspy.com or the server IP 54.85.159.138 in the tracker server field.
4. Set the tracker port to 8888 which is the shared Plaspy ingestion port for all devices.
5. Choose UDP or TCP if the device requires an explicit transport selection; Plaspy will automatically detect the protocol when the tracker connects.
6. Save or apply the configuration in the device tool and restart the tracker if the procedure requires a reboot.
7. Validate connectivity by confirming the G07L sends data and checking that the device appears and reports in Plaspy.

## Example Configuration Commands

The G07L supports manufacturer tools and command methods that vary by firmware and vendor tool. Exact public command syntax may differ by firmware revision and is typically provided by CanTrack in their user manual or SMS/PC configuration guide. If you require command-line examples for SMS or USB configuration, refer to the official CanTrack configuration documentation for the G07L or contact your CanTrack vendor for the precise command set.

## Configuration Notes

- Firmware differences can change SMS or GPRS command syntax. Always verify the correct commands for your device firmware before applying changes.
- When choosing TCP versus UDP, consider network behavior and packet delivery characteristics; Plaspy will accept either and detect the protocol automatically.
- Keep APN, username, and password information at hand for the mobile operator used by the SIM; incorrect APN settings commonly prevent server connections.
- Use the device's offline buffer and movement detection features to reduce false tracks and ensure data continuity during coverage gaps.
- If you use SMS-based configuration, confirm the exact SMS command format for the installed firmware version from CanTrack.

## Why Use Plaspy with This Configuration

Using the CanTrack G07L with Plaspy provides a practical integration path for fleets that need reliable 4G/LTE tracking with GSM fallback, ignition and movement events, and offline buffering. Pointing the G07L to Plaspy's shared server endpoint and port makes it straightforward to centralize telemetry, enable alerting, and leverage Plaspy dashboards for operational visibility.

Learn more about Plaspy at https://www.plaspy.com and verify the latest device-specific setup details, firmware behavior, and manufacturer documentation at https://www.cantrackgps.com/ to ensure your G07L is provisioned according to the most current guidance.
