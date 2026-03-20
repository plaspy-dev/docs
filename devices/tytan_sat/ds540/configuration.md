---
slug: /tytan_sat/ds540/configuration
id: ds540-configuration
sidebar_label: Configuration
title: Tytan SAT - DS540 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Tytan SAT DS540 showing Plaspy server settings and practical setup steps for TCP or UDP reporting
keywords:
  - Tytan SAT DS540
  - DS540 configuration
  - DS540 setup
  - Tytan SAT tracker configuration
  - Plaspy configuration
  - GPS tracker setup
  - vehicle tracker configuration
  - fleet management tracker
  - DS540 server configuration
  - GPS telematics configuration
---

# Tytan SAT - DS540 Configuration

This page documents the public configuration context for using the Tytan SAT DS540 tracker with Plaspy. It summarizes the Plaspy server values required for sending telemetry and location data, describes the practical setup workflow, and highlights what fleet integrators should confirm before attempting integration. The information here is intended for technical users and installers configuring DS540 units to report to Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when messages arrive. Exact manufacturer side setup steps can vary by DS540 firmware version, hardware revision, installation type, and the configuration tools provided by Tytan SAT or vendors. Use this guide as a practical reference while verifying device specific details against the manufacturer documentation.

## Configuration Overview

This configuration process prepares the DS540 to send GPS position, CAN bus data and sensor events to the Plaspy platform so devices become visible in real time dashboards and historical reports. The key goal is to point the tracker at the Plaspy server, confirm the correct transport and port, and validate that telemetry packets arrive and are parsed by Plaspy.

- Configure the DS540 network destination to the Plaspy server endpoint and port so it can send telemetry.
- Select the transport method required by your installation and confirm device supports TCP or UDP.
- Verify cellular connectivity and any required APN settings so GPRS data can flow.
- Validate that position, CAN derived parameters and I O events are visible in Plaspy after setup.
- Confirm firmware and vendor tools match the configuration approach you follow.

## Plaspy Server Settings

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: the DS540 may be configured to use UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when data arrives and Plaspy uses the same port for all supported devices

## Typical Requirements Before Setup

- A powered and installed DS540 unit with access to the vehicle CAN or required sensor wiring as applicable to your use case.
- Active cellular SIM and correct APN credentials for GPRS data transmission if using cellular connectivity.
- Access to the official Tytan SAT configuration method or software provided by the vendor or installer.
- Network coverage and a data plan sufficient for telemetry reporting.
- Credentials or account access to a Plaspy instance so you can confirm device visibility after configuration.
- A test plan to validate GPS fixes, CAN data mapping and event reporting once the device is pointed to Plaspy.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the DS540 sends location, telemetry and event packets to the shared Plaspy server endpoint and port. Plaspy ingests the messages, maps GPS coordinates and device parameters into dashboards and alerting workflows, and stores historical traces for reporting.

- The DS540 transmits position updates over TCP or UDP to d.plaspy.com on port 8888.
- CAN bus data and parsed FMS parameters are sent along with GPS data for fleet analytics in Plaspy.
- Digital and analogue input events and 1 wire sensor readings are reported to Plaspy for monitoring and alerts.
- Plaspy automatically detects the protocol used by the incoming DS540 messages so you do not need to predeclare the protocol in the platform.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software provided by Tytan SAT or your vendor.
2. In the tracker destination settings enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138.
3. Set the destination port to 8888 which Plaspy uses for all supported devices.
4. Choose UDP or TCP as the transport if the device configuration requires selecting a transport.
5. Ensure the device SIM and APN settings are correct so the DS540 can establish GPRS data connectivity.
6. Apply or save the configuration and restart the device if the tool requires it.
7. Validate that the device is reporting to Plaspy by confirming telemetry and position data arrive in your Plaspy account.

## Example Configuration Commands

The DS540 is commonly configured using the Tytan SAT configuration utility, vendor web tools, or SMS/AT style commands depending on firmware and installer practice. Exact commands and syntax vary by the manufacturer tool and firmware version, so there are no universal commands provided here. Refer to the Tytan SAT configuration guide or device manual for the precise command set and examples applicable to your firmware revision.

## Configuration Notes

- Firmware differences can change configuration menus and command syntax. Always match commands to the device firmware revision.
- TCP versus UDP selection is made on the device; Plaspy accepts either and will detect the incoming protocol automatically.
- Confirm APN, username and password with your SIM provider if GPRS connectivity is required for telemetry.
- Some installer tools require a device restart to apply server and port changes.
- Review the Tytan SAT manual for DS540 specific configuration methods and optional features before making configuration changes.

## Why Use Plaspy with This Configuration

Using the DS540 with Plaspy gives organizations consistent visibility into vehicle position, CAN bus metrics and sensor events. Pointing the device to Plaspy using the shared server endpoint simplifies fleet wide deployments because all Plaspy devices use the same port and the platform auto detects the tracker protocol, reducing per device platform configuration overhead.

To learn more about Plaspy and supported integrations visit https://www.plaspy.com. Device specific setup instructions, firmware behavior and manufacturer configuration methods can change over time so please verify the latest DS540 details on the Tytan SAT website at http://tytansat.com/ before you deploy.
