---
slug: /jointech/jt701/configuration
id: jt701-configuration
sidebar_label: Configuration
title: Jointech - JT701 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Jointech JT701 showing Plaspy server settings SMS commands and setup steps to connect the tracker to Plaspy
keywords:
  - Jointech JT701 configuration
  - JT701 setup guide
  - JT701 server configuration
  - Jointech tracker Plaspy
  - JT701 GPS tracker setup
  - Plaspy device configuration
  - JT701 SMS configuration
  - tracker APN settings
  - asset tracking JT701
  - cargo security tracker
---

# Jointech - JT701 Configuration

This page provides the public configuration context for using the Jointech JT701 tracker with Plaspy. It focuses on the practical server settings, SMS configuration commands that are publicly documented, and the steps you will commonly follow to point a JT701 to Plaspy for live tracking and event reporting.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, so the same endpoint and port are used for many trackers. Manufacturer side setup can vary depending on firmware, hardware revision, installation type, and vendor tools, so treat these instructions as a practical public guide and confirm any device specific steps with the manufacturer or your supplier.

## Configuration Overview

The objective of the configuration process is to prepare the JT701 to communicate its GPS and security telemetry to Plaspy and verify that data reaches the platform reliably. For JT701 devices the manufacturer provides an SMS based method to set the GPRS server and APN information which is commonly used in field installations.

- Configure the device to report to the Plaspy server endpoint so position and event data uplink successfully.
- Provide the correct APN and optional APN credentials so the device can establish GPRS data sessions.
- Validate transport selection and port settings so the tracker connects on the expected port.
- Confirm device identity and that Plaspy receives live telemetry and alarm messages.
- Use Plaspy to view location, tamper events and lock/unlock history once reporting is verified.

## Plaspy Server Settings

- Server domain d.plaspy.com as the primary Plaspy endpoint for device connections
- Server IP 54.85.159.138 as an alternative endpoint for devices that require an IP address
- Port 8888 which Plaspy uses for all supported devices
- Transport support using UDP or TCP depending on device capability and preference
- Plaspy automatically detects the tracker protocol so the same port can be used across many tracker models

## Typical Requirements Before Setup

- A charged and functioning JT701 with cellular connectivity available
- An active SIM card with data access and the correct APN for the installed mobile operator
- The device ID or tracker identifier for the unit you are configuring (used as the SMS prefix)
- Ability to send SMS commands to the tracker if using the SMS configuration method
- Access to the official Jointech configuration instructions or vendor tools for reference
- Network coverage where the device will be operating to allow GPRS uplink to Plaspy

## How This Tracker Connects to Plaspy

When configured with Plaspy server settings, the JT701 uses its cellular data link to send position updates, tamper and lock events, and status telemetry to the shared Plaspy endpoint and port. Plaspy ingests these messages, applies automatic protocol detection, and presents the telemetry in the Plaspy platform.

- The tracker reports to the shared Plaspy server endpoint d.plaspy.com or 54.85.159.138
- All devices connect using port 8888 so firewall and network rules should allow outbound traffic to this port
- The device can use UDP or TCP to transport messages to Plaspy depending on device configuration
- Plaspy automatically detects the tracker protocol and parses incoming telemetry for display and alerts
- Once reporting is active the device becomes visible in Plaspy dashboards for tracking and event history

## Common Configuration Workflow

1. Access the official Jointech configuration method or manual for the JT701 so you follow the correct SMS or tool syntax.
2. Prepare the device ID to use as the SMS prefix and confirm the current APN for the SIM in the device.
3. Enter d.plaspy.com or 54.85.159.138 as the server address in the device configuration method.
4. Set port 8888 in the tracker configuration and choose UDP or TCP if the device requires an explicit transport selection.
5. Apply or save the configuration on the device and, if using SMS, send the properly formatted SMS commands.
6. Restart the device if the documentation indicates a reboot is required for new network settings to take effect.
7. Validate that the device reports to Plaspy by checking for incoming telemetry and events in the Plaspy platform.

## Example Configuration Commands

To set the tracker send the configuration commands by SMS with the device ID prefixed exactly as required by the JT701. Replace the placeholder values with your device specific values.

- Note the tracker requires the device ID as the first token in the SMS command. Replace {{trackerID}} with your actual device ID.
- [apn] is the mobile operator APN string.
- [apnu] and [apnp] are optional APN username and password values if your SIM requires authentication.

1. Set the GPRS server and APN

Send an SMS formatted like the following, replacing placeholders:

```
({{trackerID}},2,S02,129,1,54.85.159.138,8888,[apn])
```

Alternatively you may use the server domain in place of the IP if the device supports domain names:

```
({{trackerID}},2,S02,129,1,d.plaspy.com,8888,[apn])
```

2. Set the APN user and password if required by your operator

Send this SMS only if your APN requires a username and password:

```
({{trackerID}},2,S24,129,1,[apnu],[apnp])
```

These SMS commands follow the manufacturer provided public syntax. When sending, ensure the message is addressed to the JT701 phone number and that the carrier allows SMS commands to the tracker.

## Configuration Notes

- SMS based configuration is supported by the public JT701 instructions shown above and is commonly used when field access to the device is required.
- Firmware versions and regional hardware variants can change command syntax or behavior; always confirm the correct command format with the latest manufacturer documentation.
- Choose TCP or UDP based on your network and reliability needs; both are supported toward Plaspy on port 8888.
- Plaspy uses the same port for all supported devices and performs automatic protocol detection so the server and port are the key settings to apply.
- If you have an installer tool from Jointech use it as it may simplify APN and server configuration compared to manual SMS.

## Why Use Plaspy with This Configuration

Using the JT701 with Plaspy provides a compact secure tracking solution that sends GPS position, tamper alerts and access events into a unified fleet management platform. This configuration lets operators monitor cargo security, receive immediate alarm notifications for illegal unlocking, and maintain an auditable access history that pairs the JT701 hardware features with Plaspy visibility and reporting.

To learn more about Plaspy visit https://www.plaspy.com and review the latest device specific installation and firmware notes at the manufacturer site https://www.jointcontrols.com/ as device configuration methods firmware behavior and manufacturer details can change over time.
