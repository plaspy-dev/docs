---
slug: /aplicom/a11_lte/configuration
id: a11_lte-configuration
sidebar_label: Configuration
title: Aplicom - A11 LTE Configuration
sidebar_class_name: menu_item_tracker
description: Practical configuration guidance for the Aplicom A11 LTE to connect with Plaspy using shared server settings and workflow tips
keywords:
  - Aplicom A11 LTE configuration
  - Aplicom A11 LTE setup
  - Aplicom A11 LTE server configuration
  - A11 LTE Plaspy setup
  - Plaspy tracker configuration
  - GPS tracker configuration Aplicom
  - A11 LTE GPS platform setup
  - Aplicom Bluetooth tracker setup
  - fleet management Aplicom A11 LTE
  - Aplicom OTA configuration
---

# Aplicom - A11 LTE Configuration

This page covers the public configuration context for using the Aplicom A11 LTE tracker with Plaspy. It summarizes the practical server settings and the common setup flow you will use to point an A11 LTE device to Plaspy for fleet and asset visibility. The content here focuses on public, platform-level integration details rather than device internal firmware specifics.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The Aplicom A11 LTE supports global LTE connectivity, Bluetooth sensor pairing, and OTA management, so your installer or configuration tool may present several options for transport, APN, and sensor forwarding when preparing the device for Plaspy.

## Configuration Overview

The goal of this configuration is to prepare the A11 LTE so it reliably sends location and status information to Plaspy and appears in the platform with consistent reporting. Use the manufacturer configuration tool or OTA options to set the device server and transport, then verify connectivity and reporting in Plaspy.

- Point the device to the Plaspy server endpoint so telemetry is delivered to the platform
- Select the transport protocol (UDP or TCP) if the device requires it
- Configure basic connectivity parameters such as mobile network access and any APN settings required by the SIM
- Validate that the device IMEI or device ID is known and visible in Plaspy after the first reports
- Confirm Bluetooth sensor or beacon forwarding if you intend to include additional sensor data from the A11 LTE

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP as supported by the device
- Plaspy automatically detects the tracker protocol

Note that all devices in Plaspy use the same port, so configuring port 8888 is the standard requirement for devices that will report to the platform.

## Typical Requirements Before Setup

- Physical access to the Aplicom A11 LTE to perform initial configuration or to verify settings applied via OTA
- An active mobile data SIM that supports LTE roaming if the device will be used across carrier regions
- Access to the official Aplicom configuration tool, web interface, or the vendor setup method used by your installer
- Knowledge of the device IMEI or unique device identifier so it can be matched in Plaspy after reporting
- Stable power while performing the configuration and initial tests
- Network coverage and correct APN settings for the installed SIM so the device can reach the Plaspy server

## How This Tracker Connects to Plaspy

When configured, the A11 LTE sends its telemetry and device messages directly to the Plaspy server endpoint and port so the platform can display location, status, and any forwarded sensor data. Plaspy receives the connection on a shared port and detects the sending protocol automatically.

- The device is configured to send data to d.plaspy.com or 54.85.159.138 on port 8888
- Transport can be chosen as UDP or TCP when the device firmware requires a selection
- Plaspy detects the tracker protocol automatically and parses incoming messages for display
- Location and event data appear in Plaspy once the device completes its first successful report
- If Bluetooth beacons or sensors are paired to the A11 LTE and forwarded, those measurements can be included with device reports when configured

## Common Configuration Workflow

1. Access the official Aplicom configuration method or software provided by the manufacturer or your installer
2. Locate the server or cloud settings section where you can enter the tracking server
3. Enter d.plaspy.com or alternatively 54.85.159.138 as the server address
4. Set the port to 8888
5. Choose UDP or TCP if the device requires you to select a transport
6. Apply or save the configuration and push settings to the device or schedule an OTA update
7. Restart the device if required by the procedure or firmware
8. Validate that the device reports to Plaspy and appears in your platform view

## Example Configuration Commands

The exact commands and message formats for configuring the A11 LTE depend on the Aplicom configuration tools, firmware version, and whether configuration is performed locally, via SMS, or over the air. Because model specific command syntax varies with firmware and vendor tools, follow Aplicom documentation or your vendor utility for the exact command strings.

When you perform configuration, the values you must enter or send are the Plaspy server address d.plaspy.com (or 54.85.159.138) and port 8888, and the transport selection UDP or TCP when applicable. If you use a device tool that accepts text commands, place the server and port values according to the tool instructions.

## Configuration Notes

- Firmware versions can alter menu locations, command syntax, or transport options; always verify the firmware release notes on Aplicom resources
- Choosing TCP versus UDP may affect delivery behavior; pick the transport supported by your integration and test reporting reliability
- The A11 LTE supports OTA updates which can simplify applying bulk changes across a fleet
- If Bluetooth sensor forwarding is required, confirm pairing and forwarding options in the device configuration tool before completing server setup
- Remember that Plaspy uses the same port 8888 for all supported devices and automatically detects the incoming tracker protocol

## Why Use Plaspy with This Configuration

Configuring the Aplicom A11 LTE to report to Plaspy gives you a straightforward path to fleet and asset visibility using a single shared server endpoint. Plaspy's automatic protocol detection and standardized port usage simplify device onboarding, while the A11 LTE's global LTE connectivity and Bluetooth sensor support make it a flexible unit for many tracking and telematics use cases.

To learn more about Plaspy and supported integrations visit https://www.plaspy.com. For the latest, device specific configuration details, firmware behavior, and manufacturer guidance consult Aplicom documentation at https://www.aplicom.com/ to verify current setup methods and options.
