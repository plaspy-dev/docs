---
slug: /xirgo/xt_4970/configuration
id: xt_4970-configuration
sidebar_label: Configuration
title: Xirgo - XT-4970 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Xirgo XT 4970 integration with Plaspy server settings and SMS commands for quick setup
keywords:
  - Xirgo XT 4970 configuration
  - Xirgo tracker setup
  - XT 4970 Plaspy integration
  - Plaspy server configuration
  - GPS tracker setup guide
  - trailer tracking configuration
  - LTE tracker setup
  - APN and GPRS configuration
  - energy harvesting tracker setup
  - vehicle tracking platform setup
---

# Xirgo - XT-4970 Configuration

This page provides the public configuration context needed to connect the Xirgo XT-4970 to the Plaspy platform. It summarizes practical server settings, the common setup workflow, and example SMS configuration commands that are published for this model. Use this guide together with the official Xirgo documentation to complete device setup and verification.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The XT-4970 supports SMS or remote configuration paths; the example commands below show the common SMS command format used to set APN and the GPRS server for Plaspy.

## Configuration Overview

The goal of this configuration process is to prepare the XT-4970 so it can reliably report location and status to Plaspy. The steps below describe practical objectives you will accomplish during setup and validation.

- Configure mobile data settings such as the APN so the device can access the carrier network.
- Point the device to Plaspy's shared server endpoint so telemetry is routed into the platform.
- Select the transport method (UDP or TCP) and set the shared Plaspy port used by all devices.
- Verify the device is able to send packets to Plaspy and confirm visibility in the platform.
- Document the device IMEI or identifier for use when adding the tracker into Plaspy.

## Plaspy Server Settings

Use the following public Plaspy settings when configuring the XT-4970. These are the values Plaspy expects for device telemetry routing.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support using either UDP or TCP
- Plaspy automatically detects the tracker protocol for incoming connections

Note that Plaspy uses the same port for all supported devices and its platform detects the device protocol automatically.

## Typical Requirements Before Setup

- A powered XT-4970 with an active LTE SIM provisioned for data on a supported carrier.
- APN settings and any APN username or password required by the mobile operator.
- Ability to send SMS commands to the device or access to the Xirgo configuration tool used by your vendor.
- The device IMEI or other identifier so the unit can be recognized in Plaspy after it begins reporting.
- Access to manufacturer documentation for device-specific command formats and firmware notes.
- Basic network visibility checks such as ensuring the device has cellular coverage on the chosen carrier.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the XT-4970 is pointed at the Plaspy server endpoint and sends its location and event data over the selected transport. Plaspy receives the data on a shared port and assigns it to the appropriate account and device record using the device identifier.

- The tracker sends GPRS reports to d.plaspy.com or to the IP address 54.85.159.138.
- Traffic is sent to port 8888 on the Plaspy server.
- You may choose UDP or TCP as the transport where the device firmware requires a selection.
- Plaspy automatically detects the protocol used by the tracker and processes incoming messages.
- Once the device reports, it becomes visible in Plaspy for location, motion, and event monitoring.

## Common Configuration Workflow

Follow these practical public steps when preparing an XT-4970 for use with Plaspy.

1. Access the official Xirgo configuration method or software recommended by your vendor, or prepare to send SMS configuration messages if supported.
2. Enter the Plaspy server as d.plaspy.com or the IP address 54.85.159.138 in the GPRS server setting.
3. Set the port to 8888, since Plaspy uses the same port for all devices.
4. Choose the transport option UDP or TCP if the device requires you to specify a transport type.
5. Configure the operator APN and any APN credentials required by the SIM so the device has data access.
6. Apply or save the configuration and restart the device if the firmware requires rebooting to apply changes.
7. Validate the device reports to Plaspy by confirming the unit appears in the platform or by checking server-side logs for an initial connection.

If your installation uses SMS-based configuration, the commands shown below can be used as examples; always verify formatting with the latest Xirgo documentation.

## Example Configuration Commands

The XT-4970 can be configured by SMS using the public command format published for this model. Preserve the order when required by the device.

- Set the operator APN. Replace placeholders with your carrier values:
```sms
+XT:1002,[apnu],[apnp],[apn]
```
Explanation of placeholders:
- [apn] is the APN name required by the mobile operator.
- [apnu] is the APN username if the operator requires one.
- [apnp] is the APN password if the operator requires one.

- Set the GPRS server to point the device at Plaspy. This command configures the port and IP address used by Plaspy:
```sms
+XT:1001,8888,54.85.159.138,4,0,0
```
Notes:
- The command includes port 8888 and the Plaspy server IP 54.85.159.138 as shown.
- The trailing numeric parameters follow the device command format; consult Xirgo documentation for their exact meanings if you need to adjust transport flags or connection modes.
- If your workflow prefers a hostname, enter d.plaspy.com in your vendor tool or SMS method where the device accepts a domain instead of an IP.

## Configuration Notes

- Firmware versions and hardware revisions may change the exact SMS syntax or configuration tool behavior; always confirm commands against the device firmware version you are using.
- Some installers prefer using Xirgo vendor tools or M2M configuration platforms rather than SMS; choose the method that matches your installation and vendor guidance.
- When given a choice, test both UDP and TCP transports to confirm which works best for your network; Plaspy will detect the active protocol.
- Verify APN credentials with the mobile operator before sending configuration commands to avoid connectivity delays.
- Keep a record of the device IMEI and the configuration commands you applied for future troubleshooting.

## Why Use Plaspy with This Configuration

Using the XT-4970 with Plaspy gives organizations a straightforward path to long term visibility for trailers, containers, and remote assets. The device's LTE connectivity and energy harvesting design make it suitable for deployments where battery longevity and reliable reporting are essential, and pointing the device to Plaspy's shared server allows centralized monitoring and operational oversight.

To learn more about Plaspy and how it can manage devices like the Xirgo XT-4970, visit https://www.plaspy.com. For the latest device specific setup instructions, firmware notes, and manufacturer details, verify the information on the official Xirgo site https://xirgo.com/ as specifications and configuration methods can change over time.
