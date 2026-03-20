---
slug: /winrich/q50/configuration
id: q50-configuration
sidebar_label: Configuration
title: Winrich - Q50 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for the Winrich Q50 GPS watch and how to point the device to Plaspy server settings
keywords:
  - Winrich Q50 configuration
  - Q50 setup
  - Winrich Q50 Plaspy
  - Q50 server configuration
  - Q50 GPS tracker setup
  - Winrich Q50 SMS commands
  - Q50 APN configuration
  - Q50 GPRS server
  - personal GPS tracker setup
  - watch tracker configuration
---

# Winrich - Q50 Configuration

This page documents the public configuration context for using the Winrich Q50 GPS watch with Plaspy. It summarizes the Plaspy server settings you must apply, practical preflight checks, and example SMS commands published for the Q50 so the device reports location and events to Plaspy for real time monitoring and historical reports.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol on the server side, while exact manufacturer-side setup steps can vary with firmware versions, hardware revisions, installation type, and vendor tools. The Q50 in many deployments is configured over SMS using the manufacturer commands shown below; adapt those commands as needed for your device firmware and operator APN.

## Configuration Overview

The configuration process prepares a Q50 wristwatch to send its location and alarm messages to Plaspy so operators can view live positions, receive SOS and tamper alerts, and review event history. Using the public SMS commands for the Q50 you will typically set time zone, APN, and the GPRS server so the watch can establish a data connection and report to Plaspy.

- Configure the device network settings so GPRS traffic is routed to Plaspy
- Set the operator APN and any required APN username or password placeholders
- Point the tracker to the Plaspy server endpoint and shared port used by all devices
- Validate connectivity and reporting so the device becomes visible in Plaspy
- Use verification commands to check current settings and live status

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices use the same port

## Typical Requirements Before Setup

- A charged Q50 device with the ability to receive SMS commands
- An active SIM card provisioned for data and SMS as required by the device
- Correct APN settings for the mobile operator, including optional APN username and password
- Access to the official manufacturer configuration method or SMS command list
- Ability to reboot or restart the device after applying configuration if needed
- An account on Plaspy and access to the platform to verify the device reports correctly

## How This Tracker Connects to Plaspy

The Q50 sends location updates, alarms and event messages over the cellular network to the Plaspy server endpoint and port. Plaspy ingests those messages, automatically detects the protocol used by the tracker, and displays location and alerts on the Plaspy platform so caregivers and managers can monitor devices in real time.

- The watch is pointed to the shared Plaspy server endpoint and port so messages arrive centrally
- Location fixes (GPS and LBS) and event alarms are transmitted over GPRS/cellular to Plaspy
- SOS events, tamper reports and low battery alerts are forwarded to Plaspy for notification
- Plaspy displays live positions and historical tracks once the device reports successfully
- Transport can be set to UDP or TCP; Plaspy will detect the tracker protocol automatically

## Common Configuration Workflow

1. Access the official manufacturer configuration method or documentation for the Q50 (SMS command list or vendor tool).
2. Ensure the device has a working SIM and correct operator APN credentials.
3. Enter the Plaspy server endpoint by using either d.plaspy.com or the IP 54.85.159.138 as required by the device interface.
4. Set the port to 8888 and, if the tracker requires a transport selection, choose UDP or TCP.
5. Apply or save the configuration on the device and send any required SMS commands to commit settings.
6. Restart or power cycle the device if the manufacturer instructions recommend it.
7. Validate that the device reports to Plaspy and appears in the platform with expected updates and alerts.

## Example Configuration Commands

The Winrich Q50 can be configured by SMS using the manufacturer commands published for the model. Preserve the order when performing an initial setup. Label the factory reset as optional and use it only when needed for initial provisioning or troubleshooting.

- Optional initial factory reset
```text
940#
```

- Set the time zone to UTC 0
```text
801#W0#
```

- Set the operator APN
```text
802#[apn]#[apnu]#[apnp]#
```
Note: [apn] is the operator APN. [apnu] and [apnp] are optional APN username and password placeholders if your operator requires them. If your APN does not use a username or password, send empty placeholders as your device documentation indicates.

- Set the GPRS server to the Plaspy IP and port
```text
803#54.85.159.138#8888#
```
This command configures the device to send GPRS reports to the Plaspy server IP and port. You can also use the domain d.plaspy.com if the device accepts hostnames in place of IP addresses.

- Set the reporting update interval to 60 seconds
```text
730#60#
```

- Check current settings
```text
886#
```

- Check device status
```text
902#
```

Send SMS commands from the registered administrator number as described in your Q50 documentation. Wait for device confirmation messages where applicable before proceeding to the next step.

## Configuration Notes

- Firmware and hardware revisions can change command behavior; confirm syntax with the Q50 manual for your device firmware.
- The Q50 supports SMS based configuration as shown; vendor software or service tools may provide an alternative management path.
- TCP versus UDP selection depends on your installation needs and network behavior; Plaspy accepts either and performs automatic protocol detection.
- Keep APN credentials ready and test connectivity on the mobile operator network before pointing to Plaspy.
- Use verification commands (886# and 902#) to confirm settings and operational status after changes.

## Why Use Plaspy with This Configuration

Using the Q50 with Plaspy gives caregivers and organizations a straightforward path to real time visibility, alerting, and historical tracking for individuals who require continuous monitoring. Pointing the device to Plaspy using the shared server settings standardizes reporting and enables consistent handling of SOS, tamper, geofence and low-battery events on the Plaspy platform.

To learn more about Plaspy and the platform capabilities, visit https://www.plaspy.com. For the latest device specific instructions, firmware notes and manufacturer guidance for the Winrich Q50, verify details on the official manufacturer site http://www.winrichgroup.com/en/ since vendor setup steps and firmware behavior can change over time.
