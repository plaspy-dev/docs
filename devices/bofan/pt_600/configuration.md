---
slug: /bofan/pt_600/configuration
id: pt_600-configuration
sidebar_label: Configuration
title: Bofan - PT-600 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for Bofan PT 600 showing Plaspy server settings SMS commands and checklist for preparing the tracker for online tracking
keywords:
  - Bofan PT-600 configuration
  - Bofan PT-600 setup
  - Bofan PT-600 Plaspy
  - PT-600 server configuration
  - PT-600 SMS setup
  - PT-600 GPRS setup
  - Bofan GPS tracker configuration
  - Bofan PT-600 tracking setup
  - PT-600 APN configuration
  - Plaspy tracker configuration
---

# Bofan - PT-600 Configuration

This page describes the public configuration context for using the Bofan PT-600 with the Plaspy platform. It collects the practical server settings and SMS command examples that are commonly used to connect a PT-600 tracker to Plaspy. Use this guide to understand what you need to set on the device before it appears in Plaspy.

The PT-600 supports SMS and GPRS based setup and reporting, and the manufacturer provides SMS command configuration that can be used during installation. Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware version, hardware revision, installer method, and vendor tools.

## Configuration Overview

The goal of the configuration process is to prepare the PT-600 to establish reliable data sessions with Plaspy and to make the device visible in the Plaspy platform. Typical public configuration actions include setting the device identifier, configuring the mobile data APN, and pointing the tracker at the Plaspy server and port.

- Set or confirm the device password and, if required, perform an optional factory reset before provisioning.
- Configure a 14 digit identifier typically derived from the IMEI so Plaspy can match the device to its records.
- Set the mobile operator APN and credentials so the tracker can use GPRS for online reporting.
- Configure the Plaspy GPRS server endpoint so the tracker sends data to the correct host and port.
- Set reporting interval or heartbeat so the device sends position updates at the desired frequency.
- Validate connectivity via SMS or by observing the device become active in Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol so a single account endpoint supports many tracker types
- Note that Plaspy uses the same port for all supported devices

## Typical Requirements Before Setup

- A charged or vehicle powered PT-600 with a working SIM that supports GPRS data and SMS.
- The device IMEI number available for identifier configuration and pairing.
- Mobile operator APN, and APN username and password if required by the carrier.
- Access to an SMS sender (phone, SMS gateway, or the manufacturer configuration tool) to issue configuration commands.
- Access to the official Bofan documentation or vendor support for any firmware specific details.
- Basic understanding of whether you will use TCP or UDP transport if the tracker requires explicit selection.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the PT-600 is pointed to the platform server and sends location and device data over the mobile network to the shared Plaspy endpoint and port. Plaspy then automatically detects the tracker protocol and processes incoming messages so the device becomes visible in the platform.

- The tracker is configured to report to d.plaspy.com or the equivalent server IP 54.85.159.138 on port 8888.
- Communication typically uses GPRS data sessions; SMS is available for remote configuration and quick verification.
- Reports are sent at the configured update interval so Plaspy receives position and event updates.
- Plaspy uses the same port for all devices and automatically determines the tracker protocol at the platform level.
- Once reporting starts, the device appears in Plaspy for monitoring, event alerts, and historical data.

## Common Configuration Workflow

1. Access the official Bofan configuration method or software, or prepare an SMS sender capable of sending configuration commands to the PT-600.
2. Enter the Plaspy target either as the domain d.plaspy.com or as the server IP 54.85.159.138 depending on the device interface.
3. Set the server port to 8888 as required by Plaspy and confirm the device will use that port for reporting.
4. If the device requires selecting a transport, choose either UDP or TCP depending on installer preference or device options.
5. Configure APN and any required APN credentials so GPRS connectivity is established.
6. Apply or save the configuration and restart the device if the manufacturer recommends a reboot for changes to take effect.
7. Validate that the device reports to Plaspy by checking device status in the Plaspy platform or by confirming server acknowledgement via SMS where supported.

## Example Configuration Commands

The PT-600 can be configured using SMS commands sent from a mobile phone or SMS gateway. The sample commands below use the device password prefix. The default device password in these public examples is 000000. If your device password has been changed, replace the password in each command accordingly.

- Optional initial factory reset (use only when needed)
```text
000000DFT
```

- Set a 14 digit device identifier for Plaspy. Replace \\<last14imei> with the last 14 digits of the device IMEI
```text
000000GID<last14imei>
```

- Set the mobile operator APN. Replace the placeholders [apn], [apnu], and [apnp] as needed
```text
000000APN[apn],[apnu],[apnp]
```
Explanation: [apn] is the APN name. [apnu] and [apnp] are optional APN username and password fields and should be left empty or omitted if not required by the carrier.

- Set the Plaspy GPRS server by IP and port
```text
000000SVR54.85.159.138,8888
```
This configures the device to report directly to the Plaspy server IP and port. You may alternatively use d.plaspy.com if your device supports domain names.

- Set the update interval to 60 seconds
```text
000000GTI60
```
This adjusts the reporting heartbeat. Change the numeric value to the required interval in seconds if needed.

Note: Commands must be sent in the order appropriate for your deployment. A common sequence is optional factory reset, set GID, set APN, set server, then set interval. Always replace the default password if your device has been reconfigured.

## Configuration Notes

- SMS based setup is publicly supported for PT-600 devices and is often used in field installations where direct access to the unit is limited.
- Firmware revisions and hardware variations may change command syntax or supported parameters. Verify commands against your device firmware version.
- Choose UDP or TCP on the device only if required; Plaspy will automatically detect the tracker protocol at the server side once messages arrive on the shared port.
- Use the IMEI derived 14 digit identifier that the installer or platform expects so the device maps correctly in Plaspy.
- Keep APN credentials handy. Missing or incorrect APN settings are the most common cause of failed GPRS registration.

## Why Use Plaspy with This Configuration

Configuring the Bofan PT-600 to report to Plaspy provides a practical route to get camera enabled vehicle tracking, driver identification, and alarm events into a single fleet monitoring platform. With the shared Plaspy server settings and automatic protocol detection, installers can point multiple tracker types at the same endpoint and let Plaspy handle protocol parsing and device onboarding.

To learn more about Plaspy, visit https://www.plaspy.com. For the latest device specific commands, firmware notes, and manufacturer guidance for the PT-600, verify details at the official Bofan site https://www.bofancloud.com/ since manufacturer specifications and setup methods can change over time.
