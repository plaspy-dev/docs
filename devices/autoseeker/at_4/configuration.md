---
slug: /autoseeker/at_4/configuration
id: at_4-configuration
sidebar_label: Configuration
title: Autoseeker - AT-4 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Autoseeker AT-4 showing Plaspy server settings and practical setup guidance for reliable pet tracking
keywords:
  - Autoseeker AT-4 configuration
  - Autoseeker AT-4 setup Plaspy
  - Autoseeker GPS tracker configuration
  - AT-4 Plaspy server setup
  - Autoseeker pet tracker setup
  - AT-4 tracking software configuration
  - Autoseeker AT-4 GPS platform configuration
  - AT-4 geofence setup
  - Autoseeker tracker integration
  - AT-4 location reporting
---

# Autoseeker - AT-4 Configuration

This page covers the public configuration context for using the Autoseeker AT-4 with Plaspy. It explains the shared server settings Plaspy requires, the typical prerequisites you should confirm before setup, and practical guidance on the common configuration workflow used to connect the AT-4 to the Plaspy platform for live tracking, geofence alerts, and history playback.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer-side setup steps can vary depending on the AT-4 firmware version, hardware revision, installation type, and vendor configuration tools. Use this guide as a practical reference for the public Plaspy connection details and workflow; verify any device-specific controls or commands against Autoseeker documentation or vendor instructions.

## Configuration Overview

The goal of configuration is to point the AT-4 to Plaspy so the device's cellular link can deliver location and status updates to the platform reliably. This involves entering the Plaspy server endpoint, confirming transport settings, saving the configuration on the device, and verifying the tracker reports correctly to the platform.

- Configure the device to report to Plaspy's shared server endpoint so live location and events reach the platform.
- Choose the transport mode supported by the tracker (UDP or TCP) and set the device to use it.
- Save and apply the manufacturer configuration so the tracker sends data to Plaspy on the required port.
- Validate connectivity and visibility in Plaspy by confirming the device appears and transmits position updates.
- Use manufacturer tools or SMS/portal methods as provided by Autoseeker to perform the configuration and troubleshooting.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol so the platform accepts incoming data from standard GPS trackers

## Typical Requirements Before Setup

- Ensure the AT-4 has a charged battery and is powered for configuration and initial reporting.
- Confirm the device has a properly provisioned cellular SIM with data enabled and suitable network coverage for 4G or fallback GSM bands.
- Have the device IMEI or identifier available for platform registration or verification if required by your workflow.
- Access to the official Autoseeker configuration method such as their provided app, web portal, or SMS/command interface.
- A stable location for testing where the tracker can obtain GNSS fixes and cellular connectivity during validation.
- Familiarity with any vendor-supplied configuration instructions for the AT-4 firmware revision you are using.

## How This Tracker Connects to Plaspy

When configured, the AT-4 sends position and status messages over its cellular connection to the shared Plaspy server endpoint and port so owners and operators can monitor animals in real time. Plaspy ingests the incoming device messages and makes them available for live maps, geofence alerts, and history playback.

- The tracker is set to report to d.plaspy.com or the equivalent server IP 54.85.159.138.
- All devices use the same port on Plaspy, port 8888, simplifying server configuration across trackers.
- The tracker can use UDP or TCP transport; set the device transport to the option supported by the deployment and save the setting.
- Plaspy automatically detects the tracker protocol and accepts the incoming data for processing and display.
- After configuration the AT-4 will generate location updates, alarm messages, and status notifications viewable in Plaspy.

## Common Configuration Workflow

1. Access the official Autoseeker configuration method or software for the AT-4 (app, portal, or SMS/command interface) following vendor instructions.
2. In the device server or TCP/UDP settings enter the Plaspy server endpoint by hostname d.plaspy.com or by server IP 54.85.159.138.
3. Set the device port to 8888 as required by Plaspy.
4. Choose the transport protocol UDP or TCP if the AT-4 requires a transport selection; pick the option that matches your deployment or vendor guidance.
5. Apply or save the configuration on the device using the manufacturer's tool or command sequence.
6. Restart the tracker if the vendor instructions indicate a reboot is required to apply network settings.
7. Validate that the device reports to Plaspy by checking that location and status messages appear on the platform and that geofence and alert messages are triggered as expected.

## Example Configuration Commands

No public, device-specific command set was provided for the AT-4 in this public configuration summary. The exact commands and format for configuring the server address, port, and transport on the AT-4 vary by Autoseeker firmware and the vendor tool you use (for example, an official app, web portal, or SMS command interface). When using commands or SMS-based setup, you will typically enter the Plaspy hostname d.plaspy.com or the IP 54.85.159.138 and the port 8888, and select UDP or TCP if requested by the device.

If you receive a command list from Autoseeker or your vendor, follow their order and syntax exactly. Preserve placeholders provided by the manufacturer for APN or credentials and consult the device manual for verification commands that confirm the server settings have been applied.

## Configuration Notes

- Plaspy uses the same port for all supported devices; set the AT-4 to port 8888 to ensure connectivity.
- The AT-4 supports selection of UDP or TCP; choice of transport can affect message reliability and should follow installer guidance.
- Plaspy automatically detects the tracker protocol, which reduces the need to match a protocol ID on the platform side.
- Firmware versions and vendor tools differ; always confirm the correct command syntax or app screens for your AT-4 firmware revision.
- Verify cellular coverage and SIM provisioning before troubleshooting server connectivity to avoid false positives when testing.

## Why Use Plaspy with This Configuration

Using the Autoseeker AT-4 with Plaspy gives owners and operators a straightforward path to continuous animal visibility, alarm delivery, and history playback. The AT-4’s long battery life, outdoor durability, and two-way features combine with Plaspy’s unified server endpoint to make remote monitoring and incident response simpler and more reliable.

To learn more about Plaspy and how it integrates with compatible trackers like the AT-4 visit https://www.plaspy.com. For the latest device-specific setup instructions, command syntax, and firmware details consult the manufacturer at https://autoseekergps.com/ to verify current information before deployment.
