---
slug: /gosafe/g6c/configuration
id: g6c-configuration
sidebar_label: Configuration
title: Gosafe - G6C Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Gosafe G6C showing Plaspy server settings and practical setup steps for fleet tracking
keywords:
  - Gosafe G6C configuration
  - Gosafe G6C setup Plaspy
  - Gosafe G6C server configuration
  - G6C GPS tracker setup
  - Gosafe tracker Plaspy integration
  - G6C fleet tracking configuration
  - G6C telemetry setup
  - Plaspy tracker configuration
  - vehicle tracking G6C
  - G6C installation guide
---

# Gosafe - G6C Configuration

This page covers the public configuration context for using the Gosafe G6C tracker with Plaspy. It explains the practical server settings and general setup workflow needed to point a G6C device at the Plaspy platform for real time tracking and buffered telemetry uploads. Use this guide to understand the shared Plaspy server values and the typical manufacturer setup steps you will apply when integrating the G6C into a fleet.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while the exact device-side steps depend on firmware, hardware revision, installation type, and vendor configuration tools. The G6C supports common transport modes and message buffering, so pairing the device to Plaspy typically requires adjusting the device endpoint, transport, and port and then validating connectivity in the platform.

## Configuration Overview

This configuration process prepares the G6C to send location and telemetry to Plaspy using the platform's shared server endpoint and port. The goal is to configure the device so Plaspy can automatically detect the protocol, accept incoming messages, and display device telemetry in dashboards and reports.

- Point the G6C to the Plaspy server domain or IP so messages route to the platform.
- Select the transport mode supported by the installed firmware, UDP or TCP on the Plaspy port.
- Save and apply settings on the device using the official Gosafe configuration method.
- Validate that the tracker is visible in Plaspy and that location and input telemetry arrive.
- Use buffered message and retry features on the G6C to ensure reliable uploads during intermittent connectivity.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol
- Note that all devices in Plaspy use the same port for inbound tracking messages

## Typical Requirements Before Setup

- Ensure the G6C has a valid power source and is connected per manufacturer installation instructions.
- Confirm the device has an active cellular connection and a working SIM if the unit uses cellular transport.
- Obtain the official Gosafe configuration tool or method for your model and firmware (USB, serial, or OEM software).
- Verify device firmware is up to date and supports TCP or UDP upload modes required for your deployment.
- Know the device IMEI or unique identifier so you can match the device in Plaspy after it connects.
- Have access to Plaspy account information or the team managing device provisioning so the tracker can be validated in the platform.

## How This Tracker Connects to Plaspy

The G6C sends GNSS coordinates and telematics data over the cellular network to the shared Plaspy server endpoint and port. Plaspy ingests those messages and matches the device using identifiers included in the upload, enabling live position updates, alerts, and historical reporting.

- The tracker reports position updates to d.plaspy.com or 54.85.159.138 on port 8888.
- Device messages may use UDP or TCP transport depending on the selected configuration and firmware capabilities.
- The G6C uploads buffered messages after connectivity resumes so Plaspy receives data collected during outages.
- Telemetry for ignition, digital and analog inputs, and accelerometer events is forwarded to Plaspy for rule evaluation and alerts.
- Plaspy automatically detects the tracker protocol, so standard endpoint and port configuration is usually sufficient for message parsing.

## Common Configuration Workflow

1. Access the official Gosafe configuration method for the G6C (USB tool, dedicated software, or vendor portal) as provided by the manufacturer or installer.
2. In the device server or network settings, enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138.
3. Set the upload port to 8888 as required by Plaspy.
4. Choose UDP or TCP as the transport if the device requires a transport selection.
5. Apply or save the configuration to the device using the manufacturer tool.
6. Restart the device if the firmware or tool documentation indicates a reboot is required.
7. Validate that the device reports to Plaspy by checking device visibility and telemetry in the platform.

## Example Configuration Commands

The G6C supports configuration through Gosafe tools and manufacturer utilities; exact command formats and SMS or serial strings vary by firmware and vendor tool. Because manufacturer configuration methods change across firmware revisions and regional variants, follow the official Gosafe instructions for your device model and firmware revision when entering server and port values.

If you have specific public commands from Gosafe for the G6C, apply them in the order shown by the manufacturer and preserve placeholders such as [apn] or other APN fields exactly as provided. Placeholders represent values you must supply, for example an operator APN string or login credentials.

## Configuration Notes

- Firmware differences can change configuration interfaces and supported transport modes; always check the device firmware version before applying settings.
- TCP and UDP behave differently for delivery and retry semantics; choose the transport that fits your reliability and latency requirements.
- Because Plaspy uses the same port for all devices and detects protocols automatically, you only need to ensure the server domain or IP and the port are correct on the device side.
- Retain access to device logs or the manufacturer tool output when troubleshooting connectivity to d.plaspy.com or 54.85.159.138 on port 8888.
- Verify any SMS based configuration commands or serial configuration steps against the official Gosafe documentation to avoid unintended changes.

## Why Use Plaspy with This Configuration

Using the Gosafe G6C with Plaspy provides a tested endpoint and shared server configuration that simplifies large scale fleet deployments. Pointing the G6C to Plaspy using the documented server domain or IP and the shared port allows Plaspy to automatically detect the protocol and ingest GNSS and telemetry data for real time monitoring, alerts, and historical analytics.

Learn more about Plaspy on the main website https://www.plaspy.com. For the latest device specific configuration methods, firmware behavior, and manufacturer details, verify current information on the Gosafe official website https://gosafesystem.com/ as device setup instructions and firmware capabilities may change over time.
