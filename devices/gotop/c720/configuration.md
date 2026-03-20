---
slug: /gotop/c720/configuration
id: c720-configuration
sidebar_label: Configuration
title: GOTOP - C720 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for GOTOP C720 use with Plaspy including required server settings and setup workflow
keywords:
  - GOTOP C720 configuration
  - GOTOP C720 setup
  - GOTOP C720 Plaspy
  - GOTOP GPS tracker configuration
  - GOTOP C720 server settings
  - vehicle tracker configuration
  - Plaspy server setup
  - GOTOP C720 installation
  - GOTOP C720 GPS tracker
  - GOTOP tracker Plaspy compatibility
---

# GOTOP - C720 Configuration

This page covers the public configuration context for using the GOTOP C720 Relay Car GPS Tracker with the Plaspy platform. It describes the shared server settings Plaspy expects, practical preparation steps, and a common workflow to get the C720 reporting location and alarm telemetry to Plaspy. This guidance is focused on publicly available configuration practices and the Plaspy endpoint details you must apply on the device or via manufacturer tools.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary depending on firmware, hardware revision, installation type, and vendor tools. The C720 communicates via GSM/GPRS and SMS to online platforms, so you will typically configure the device through the GOTOP configuration method (SMS commands or a manufacturer software tool) and point it to the Plaspy server endpoint and port listed below.

## Configuration Overview

The goal of this configuration process is to prepare the C720 to reliably communicate with Plaspy, validate connectivity, and enable the device to appear in the Plaspy platform for live tracking and alarms.

- Configure the device to send GPRS position packets and alarm messages to the Plaspy server endpoint.
- Validate mobile network connectivity and correct APN settings for GPRS reporting.
- Set the Plaspy server values and choose the transport protocol (UDP or TCP) if required by the device.
- Confirm the device appears in Plaspy and that position and alarm telemetry are received.
- Test event reporting such as geo-fence and movement alarms to ensure alerts reach Plaspy.

## Plaspy Server Settings

Use the following public server settings when configuring the C720 for use with Plaspy:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; the device may be configured using UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- A powered and installed GOTOP C720 with vehicle wiring completed and accessible for configuration.
- An active SIM card with data enabled and the correct APN settings obtained from the mobile carrier.
- Access to the official GOTOP configuration method or software from the manufacturer for setting server and network parameters.
- The device IMEI and any vendor-provided identifiers handy for platform registration or device lookup.
- Reliable GSM signal at the installation location to allow GPRS reporting to Plaspy.
- Administrative access to Plaspy to confirm incoming device telemetry after configuration.

## How This Tracker Connects to Plaspy

When configured, the C720 uses its GSM/GPRS link to send GPS positions and device telemetry to the shared Plaspy server endpoint and port. Plaspy ingests those packets, automatically detects the device protocol, and presents location and alarm information in the platform.

- The tracker reports position packets and status messages to d.plaspy.com (or 54.85.159.138) on port 8888.
- Messages can be transported over UDP or TCP depending on device selection; Plaspy will accept either and auto-detect the protocol.
- Event-driven alarms such as geo-fence triggers, vibration or movement alarms, and power cut events are forwarded to Plaspy for notifications and reporting.
- Continuous or periodic position updates provide live tracking and historical route playback within Plaspy.
- Device health and connectivity status are visible in Plaspy once packets are received from the C720.

## Common Configuration Workflow

1. Access the official GOTOP configuration method or software provided by the manufacturer (SMS commands, USB tool, or vendor app as available).
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device server address field.
3. Set the server port to 8888. Remember that Plaspy uses the same port for all devices.
4. Choose UDP or TCP if the device requires selection of a transport protocol; the device may be configured using UDP or TCP on port 8888.
5. Configure the SIM APN and other network settings required by the carrier so the device can establish GPRS.
6. Apply or save the configuration and restart the device if the manufacturer instructions require it.
7. Validate that the device reports to Plaspy by checking for incoming position and alarm messages in the platform and confirming the IMEI or device identifier is visible.

## Example Configuration Commands

The exact configuration commands and method depend on GOTOP firmware and the configuration interface you use. Manufacturers commonly provide SMS commands, PC configuration tools, or mobile apps for setting the server, port, and APN. Because commands vary by firmware version and vendor tool, consult the GOTOP configuration guide included with the device or the GOTOP website for the precise command set.

If you use SMS-based configuration, the typical workflow is:
- Use the manufacturer SMS format to set the server address to d.plaspy.com or 54.85.159.138
- Set the port to 8888
- Configure APN settings for your SIM
- Save and restart the device

Refer to the GOTOP documentation for the exact SMS text or software fields required by your device firmware.

## Configuration Notes

- Firmware and hardware revisions can change the exact SMS commands or configuration fields; always verify against the GOTOP manual for your unit.
- Choosing TCP versus UDP can affect delivery semantics; if the device supports both, pick the transport recommended for your installation and network conditions.
- Ensure APN, username, and password are correct for the SIM; keep placeholders such as [apn], [apnu], or [apnp] if your configuration tool requires them and replace with carrier values.
- For covert installations, verify GSM signal strength and test data connectivity before finalizing the hidden mounting location.
- If you rely on SMS fallback, confirm that alarm messages are correctly formatted for Plaspy or coordinated with your vendor for SMS-to-platform delivery.

## Why Use Plaspy with This Configuration

Configuring the GOTOP C720 to report to Plaspy gives organizations a straightforward way to collect real-time location data, alarms, and historical routes from a compact, covert tracker. Plaspy centralizes telemetry from multiple devices, allowing fleet managers and security teams to monitor movement, receive geo-fence and power cut alerts, and support recovery or incident workflows.

Learn more about Plaspy on the main website https://www.plaspy.com and verify the latest device-specific configuration methods and firmware details with the manufacturer at https://www.gotop.cc/. Manufacturer specifications, setup methods, and firmware behavior can change over time so always confirm current instructions on the official GOTOP resources.
