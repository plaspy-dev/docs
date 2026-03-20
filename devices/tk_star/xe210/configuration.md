---
slug: /tk_star/xe210/configuration
id: xe210-configuration
sidebar_label: Configuration
title: TK-Star - XE210 Configuration
sidebar_class_name: menu_item_tracker
description: Configuration guide for TK-Star XE210 tracker to connect with Plaspy using shared server settings and SMS or GPRS setup
keywords:
  - TK-Star XE210
  - XE210 configuration
  - XE210 setup
  - TK-Star configuration
  - XE210 server configuration
  - Plaspy device configuration
  - GPS tracker setup
  - vehicle tracking setup
  - XE210 SMS configuration
  - GPRS tracker configuration
---

# TK-Star - XE210 Configuration

This page documents the public configuration context for using the TK-Star XE210 GPS tracker with Plaspy. It focuses on the practical server settings and setup flow you can use to point the device to Plaspy so the tracker reports location and status to your Plaspy account. The guidance below is based on publicly available configuration commands and Plaspy server values.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer side setup steps can vary depending on device firmware, hardware revision, installation type, and vendor tools. Use this page to prepare the XE210 for Plaspy and then verify device behavior against the manufacturer documentation and your own testing.

## Configuration Overview

The goal of configuring the XE210 for Plaspy is to prepare the tracker to communicate reliably with the Plaspy backend so location updates, alarms, and status reports are visible in the platform. The process typically involves setting the mobile network APN, configuring the GPRS server endpoint, choosing the transport type if required, and confirming the reporting interval.

- Point the device to the Plaspy server endpoint so data is routed to your Plaspy instance
- Configure APN and any required credentials so the tracker can use mobile data
- Select UDP or TCP transport when the device asks for a protocol
- Set an appropriate upload interval for your monitoring needs
- Validate connectivity and confirm the tracker appears in Plaspy

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and uses the same port 8888 for all supported devices

These settings are the public Plaspy endpoint values you can use when configuring the XE210. Use either the domain name or the server IP in the device configuration as supported by the tracker.

## Typical Requirements Before Setup

- A working SIM card inserted and activated with a mobile data plan and SMS capability
- Access to the XE210 configuration method provided by the manufacturer such as SMS commands or vendor software
- The device must have sufficient battery or power for configuration and initial network registration
- Knowledge of the operator APN and optional APN username and password for the SIM card
- Access to the device default password if SMS configuration requires it (the XE210 default password is documented below)
- A Plaspy account and awareness of expected device identifiers so you can confirm device registration in the platform

## How This Tracker Connects to Plaspy

The XE210 can be configured to report its telemetry and location to the Plaspy server endpoint so that Plaspy receives periodic updates and event reports. Once the network and server parameters are set, the tracker uses mobile data to establish a session with Plaspy and sends position and status packets to the shared Plaspy endpoint.

- The tracker is pointed at d.plaspy.com or 54.85.159.138 and uses port 8888 for data uploads
- Choose UDP or TCP transport on the device when prompted; Plaspy will accept either and auto detect the protocol
- The device sends periodic location uploads according to the configured upload interval
- Alarms and status events are transmitted to Plaspy and are available for event reporting in the platform
- Plaspy uses a single port for all devices so configuring port 8888 is sufficient for compatibility

## Common Configuration Workflow

1. Access the official manufacturer configuration method such as the XE210 SMS command interface or any vendor configuration tool recommended by TK-Star.
2. If required, restore factory defaults first or confirm the device password so subsequent SMS commands are accepted.
3. Enter d.plaspy.com or 54.85.159.138 as the GPRS server address in the device configuration.
4. Set port 8888 for server communication and choose UDP or TCP if the tracker requires a transport selection.
5. Configure the APN, and APN username and password if required by your mobile operator.
6. Apply or save the configuration and switch the device to GPRS or network mode as needed.
7. Restart the device if the manufacturer recommends it, then validate that the XE210 reports to Plaspy and appears in your Plaspy interface.

## Example Configuration Commands

The XE210 supports SMS-based configuration. The sample commands below are the public SMS commands used for initial setup. The device default password in these examples is 123456. Preserve the placeholders as shown when sending commands.

- Optional initial factory reset (use only if you need to restore defaults)
```text
begin123456
```

- Set the operator APN
```text
apn123456 {{apn}}
```
Explaination: replace {{apn}} with your mobile operator APN such as internet or the operator specific value.

- Set the APN username (if required)
```text
apnuser123456 {{apnu}}
```
Explaination: replace {{apnu}} with the APN username if your operator requires it. Omit if not needed.

- Set the APN password (if required)
```text
apnpasswd123456 {{apnp}}
```
Explaination: replace {{apnp}} with the APN password if your operator requires it. Omit if not needed.

- Set the GPRS server to Plaspy using server IP and port
```text
adminip123456 54.85.159.138 8888
```
Explaination: this sets the device to send data to the Plaspy server IP on port 8888. You may use d.plaspy.com if the device accepts hostnames.

- Set the upload interval to 60 seconds
```text
upload123456 60
```
Explaination: adjust the interval value to suit your reporting frequency needs.

- Switch the device to GPRS mode
```text
gprs123456
```

Send these commands in the order shown when following an initial setup flow. If your device or firmware supports hostname configuration, you can replace the server IP with d.plaspy.com. Keep the default password 123456 in the command string unless you have previously changed it.

## Configuration Notes

- Firmware and hardware revisions can change SMS command formats and supported parameters; always verify commands against the XE210 manual for your specific unit.
- You can typically use either d.plaspy.com or the server IP 54.85.159.138 when setting the GPRS server; use the hostname if you prefer DNS resolution.
- Choose UDP or TCP based on your installer preference or device prompts; Plaspy accepts both and will automatically detect the protocol.
- SMS based configuration is a common public method for the XE210, but manufacturer tools or configuration software may also be available.
- If you change the device password, update any scripted configuration or provisioning processes accordingly.

## Why Use Plaspy with This Configuration

Using the XE210 configured to send data to Plaspy provides a straightforward way to add the device into a single monitoring platform for location visibility, event alerts, and historical routes. Configuring the GPRS server and upload interval lets you balance reporting frequency and data usage while ensuring the tracker communicates reliably with Plaspy.

To learn more about Plaspy and platform features visit https://www.plaspy.com. For the most current device specific setup details, SMS command formats, and firmware notes consult the official TK-Star documentation at https://www.tk-star.com/ which may contain updates that affect configuration and behavior.
