---
slug: /careu/uc1/configuration
id: uc1-configuration
sidebar_label: Configuration
title: CAREU - UC1 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for CAREU UC1 with Plaspy showing required server settings and setup workflow for integration
keywords:
  - CAREU UC1 configuration
  - CAREU UC1 setup
  - CAREU UC1 Plaspy
  - CAREU UC1 GPS tracker
  - CAREU UC1 cargo lock
  - Plaspy tracker configuration
  - Plaspy server settings
  - GPS tracker configuration
  - asset tracking setup
  - container lock tracker
---

# CAREU - UC1 Configuration

This page describes the public configuration context for using the CAREU UC1 with Plaspy. It focuses on the Plaspy server settings and the practical, manufacturer side actions you will take to point a UC1 device at Plaspy for real time location, tamper alerts, and lock event telemetry. The guidance here is intended for technical installers and fleet administrators preparing UC1 trackers for integration with the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools. The UC1 is a rugged electronic cargo lock and GPS tracker with GNSS positioning, global 4G connectivity and optional eSIM, tamper detection, and rechargeable battery — this page ties those device capabilities back to the Plaspy server settings you will apply.

## Configuration Overview

The goal of configuration is to prepare the UC1 so its GNSS fixes and security events are delivered to Plaspy reliably. That typically means setting the device's server address and port, selecting the transport method if required, and ensuring cellular connectivity and battery readiness for initial reporting.

- Point the UC1 to the Plaspy server using the shared endpoint and port so telemetry reaches the platform.
- Select UDP or TCP transport on the device if the firmware requires a transport choice.
- Verify cellular connectivity and that the device can obtain GNSS fixes for location reporting.
- Save and apply changes, then confirm the UC1 is visible in Plaspy after the device initiates a session to the server.
- Validate tamper, lock/unlock, and battery status messages are forwarded to Plaspy to complete operational checks.

## Plaspy Server Settings

Configure the UC1 to report to the Plaspy server using these public settings when entering manufacturer configuration values or using the device provisioning tool:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888 depending on device selection
- Plaspy automatically detects the tracker protocol so the server accepts connections and interprets messages from supported devices

All devices in Plaspy use the same port, so use port 8888 for UC1 and other compatible trackers.

## Typical Requirements Before Setup

- A charged UC1 device with access to the manufacturer configuration interface or companion provisioning tool.
- Active cellular connectivity via installed SIM or configured eSIM with an appropriate data plan for uplink.
- A clear view or test environment for GNSS fixes so the device can obtain a valid location for verification.
- Access to the official CAREU configuration method or software so you can enter the Plaspy endpoint and apply settings.
- Administrative access to your Plaspy account so you can confirm device presence and telemetry after configuration.

## How This Tracker Connects to Plaspy

When configured, the UC1 uses its cellular link to send GNSS position fixes, security events, and device telemetry to the shared Plaspy server endpoint and port. Plaspy then processes those messages and presents them in the fleet management interface for monitoring, alerts, and reporting.

- The UC1 reports GNSS fixes and timestamps to d.plaspy.com or 54.85.159.138 on port 8888.
- Transport can be UDP or TCP depending on the device firmware and selected configuration.
- Security events such as chain cut, tamper, vibration, and unlocking events are forwarded to Plaspy for alerting.
- Battery level and device health messages are part of regular telemetry routed to the Plaspy server.
- Plaspy automatically detects the tracker protocol to interpret UC1 messages correctly after the device connects to the shared port.

## Common Configuration Workflow

1. Access the official CAREU configuration method or software provided by the manufacturer, or use the device's SMS or web provisioning interface if supported by the firmware.
2. Enter the Plaspy server address as d.plaspy.com or, if required, the IP address 54.85.159.138.
3. Set the destination port to 8888 which is the shared Plaspy port used for all devices.
4. Choose UDP or TCP for transport if the device requires an explicit transport selection.
5. Apply or save the configuration in the device tool and confirm the device accepted the changes.
6. Restart the device if the manufacturer documentation or firmware requires a reboot to activate the new server settings.
7. Validate that the UC1 reports to Plaspy by checking the platform for the device heartbeat, location fix, and an initial telemetry packet.

## Example Configuration Commands

The exact command syntax and provisioning method vary by CAREU firmware and the manufacturer configuration tools. CAREU may provide SMS commands, a device management app, or a desktop provisioning utility to set server values. Because commands are firmware specific, consult the official CAREU configuration guide for exact command format and any placeholders required.

If you have a manufacturer list of public commands, include them here following the manufacturer's ordering; otherwise use the vendor tool to set:
- Server domain or IP to d.plaspy.com or 54.85.159.138
- Port to 8888
- Transport to UDP or TCP if prompted

Note: When manufacturer commands include placeholders like {{apn}} or {{apnu}} preserve those placeholders and substitute your operator APN credentials when prompted by the device tool.

## Configuration Notes

- Firmware differences can change the exact menu locations or SMS/command strings required to set server and transport values; always check the CAREU release notes.
- Using the domain d.plaspy.com can be helpful for DNS based routing, while 54.85.159.138 is available when a raw IP is required by the configuration interface.
- Port 8888 is shared across all Plaspy devices so you do not need a per device port assignment.
- If the device allows both UDP and TCP, choose the transport recommended by CAREU for best reliability in your network environment.
- Confirm that unlocking and tamper event messages are included in a short test sequence after connection to Plaspy.

## Why Use Plaspy with This Configuration

Configuring the CAREU UC1 to report to Plaspy combines secure mechanical sealing and remote tracking into a single operational workflow. Organizations gain continuous visibility of location, tamper alerts, and access events from the UC1 while using Plaspy to centralize notifications, history, and fleet level monitoring. That integration helps simplify anti theft response and audit logging across containers, trailers, and other assets.

To learn more about Plaspy and how it integrates with compatible devices visit https://www.plaspy.com. For the latest device specific commands, firmware notes, and manufacturer procedures consult the official CAREU documentation at https://www.systech-iot.com/ as device configuration methods and firmware behavior can change over time.
