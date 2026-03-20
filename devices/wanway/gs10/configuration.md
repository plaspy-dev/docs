---
slug: /wanway/gs10/configuration
id: gs10-configuration
sidebar_label: Configuration
title: WanWay - GS10 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for WanWay GS10 configuration with Plaspy server settings and SMS commands
keywords:
  - WanWay GS10 configuration
  - WanWay GS10 setup
  - WanWay GS10 Plaspy
  - GS10 server configuration
  - WanWay GPS tracker configuration
  - GS10 SMS setup
  - vehicle tracking GS10
  - GS10 GPRS setup
  - WanWay tracker configuration
  - GS10 platform setup
---

# WanWay - GS10 Configuration

This page documents the public configuration context for using the WanWay GS10 with Plaspy. It focuses on the server and command settings that let the GS10 send location and status data to the Plaspy platform and explains the practical steps required to prepare the device for visibility in Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while the exact steps you perform on the manufacturer side can vary by firmware, hardware revision, installation type, and vendor tools. The WanWay GS10 supports cellular data and SMS configuration methods; the example commands below are the public SMS commands commonly used to point the device at Plaspy and to verify connectivity.

## Configuration Overview

Configuring the GS10 for Plaspy means preparing the tracker to open a GPRS session to Plaspy and to report position and status updates on the shared server endpoint and port. Where supported, the GS10 can be configured by SMS commands or through WanWay configuration tools; the public SMS commands are included in this guide.

- Set the carrier APN so the device can use mobile data to reach Plaspy.
- Point the device to the Plaspy server endpoint so reports go to the correct platform.
- Configure reporting intervals so location updates appear in Plaspy with the expected frequency.
- Switch the tracker to GPRS mode so it can send data via mobile network.
- Validate configuration with PARAM and STATUS checks to confirm the tracker is reporting.

## Plaspy Server Settings

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: UDP or TCP supported by the device; configure one of these transports if required
- Plaspy behavior: Plaspy automatically detects the tracker protocol and Plaspy uses the same port for all supported devices

## Typical Requirements Before Setup

- A powered GS10 installed or temporarily powered for configuration.
- A valid mobile SIM with data enabled and the correct APN for the carrier.
- Ability to send SMS commands to the device phone number or access to WanWay configuration software depending on your installer workflow.
- The tracker must be reachable on the mobile network and able to establish a GPRS connection to d.plaspy.com.
- Access to the WanWay GS10 user manual or vendor tools for model specific procedures.

## How This Tracker Connects to Plaspy

The GS10 is configured to report location and device status to the shared Plaspy server endpoint and port so vehicles become visible in the Plaspy platform. Once the APN and server settings are applied and GPRS is active, the tracker will open a connection to d.plaspy.com:8888 and transmit updates.

- The tracker uses cellular data (GPRS/4G) to reach the Plaspy endpoint.
- Reports are sent to d.plaspy.com or directly to 54.85.159.138 on port 8888.
- You may choose UDP or TCP if the device requires a transport selection; Plaspy will accept the connection and detect the protocol automatically.
- Reporting intervals determine how often the GS10 sends position updates to Plaspy.
- PARAM and STATUS commands can be used to verify the configuration and runtime state.

## Common Configuration Workflow

1. Access the official WanWay GS10 configuration method or software as documented by the manufacturer.
2. Configure the carrier APN for the SIM used in the device (use the APN SMS command or the vendor tool).
3. Enter the Plaspy server as d.plaspy.com or as the IP 54.85.159.138 in the device server settings.
4. Set the server port to 8888.
5. If the GS10 requires a transport selection, choose UDP or TCP according to your installation; Plaspy will detect the protocol automatically.
6. Apply or save the configuration and, if required, restart the device or toggle GPRS on so changes take effect.
7. Validate that the device reports to Plaspy by using the device verification commands or by confirming visibility in the Plaspy platform.

## Example Configuration Commands

The WanWay GS10 supports SMS-based configuration. Send these commands as text messages to the device number in the order shown where appropriate. Preserve [apn], [apnu], and [apnp] placeholders and replace them with your carrier APN, username, and password if required by your operator.

1. Configure your carrier APN
```sms
APN,[apn]{{,[apnu],[apnp]}}#
```
- Replace [apn] with your network APN. If your APN requires a username and password, include [apnu] and [apnp] as shown. The variant with username and password is optional depending on carrier requirements.

2. Setup the GPRS server pointing to Plaspy
```sms
SERVER,1,d.plaspy.com,8888,0#
```
- This command sets the primary server to d.plaspy.com on port 8888. The final parameter indicates connection type or priority per device firmware.

3. Set the reporting interval
```sms
TIMER,60,60#
```
- Example sets the tracker reporting timing values. Adjust numbers to the desired interval supported by your installation and firmware.

4. Switch to GPRS mode
```sms
GPRSON,1#
```
- Enables GPRS data mode so the tracker can send reports to the server.

5. Check the current configuration
```sms
PARAM#
```

6. Check tracker status
```sms
STATUS#
```

Note: Send commands exactly as required by the GS10 firmware. Maintain the order when applying APN and server settings, and confirm each change with PARAM# as needed.

## Configuration Notes

- Firmware and hardware revisions can change the exact SMS syntax or parameter order; always verify against the device manual.
- The GS10 supports SMS-based configuration as shown, but installers may prefer WanWay tools where available.
- Choose UDP or TCP according to installer preference or site requirements; Plaspy will accept connections on port 8888 and detect the used protocol automatically.
- Plaspy uses the same port for all supported devices which simplifies server configuration.
- If commands include placeholders like [apn], [apnu], or [apnp], replace them with carrier-specific values; do not leave placeholders in live devices.

## Why Use Plaspy with This Configuration

Using the WanWay GS10 with Plaspy gives organizations a straightforward way to bring vehicle telemetry into a single platform for visibility, monitoring, and operational oversight. The public configuration flow—APN setup, server pointing to d.plaspy.com or 54.85.159.138 on port 8888, enabling GPRS, and validating with PARAM or STATUS—lets you establish reliable communication with Plaspy quickly.

Learn more about Plaspy on the main website https://www.plaspy.com and verify the latest device specific setup details, firmware notes, and manufacturer guidance at the WanWay website https://www.wanwaytech.net/. Manufacturer specifications and setup methods can change over time so it is advisable to confirm current instructions on the official manufacturer site.
