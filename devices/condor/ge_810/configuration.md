---
slug: /condor/ge_810/configuration
id: ge_810-configuration
sidebar_label: Configuration
title: Condor - GE-810 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Condor GE-810 showing Plaspy server settings and SMS commands for initial setup
keywords:
  - Condor GE-810 configuration
  - Condor GE-810 setup
  - GE-810 Plaspy configuration
  - Plaspy tracker configuration
  - personal monitoring device setup
  - wearable tracker configuration
  - GPRS server configuration
  - SMS command setup
  - monitoring device integration
  - device server settings
---

# Condor - GE-810 Configuration

This page documents the public configuration context for using the Condor GE-810 personal monitoring device with the Plaspy platform. It consolidates the Plaspy server settings you will need and reproduces the publicly available SMS configuration commands that are commonly used to point the device at Plaspy. Use this guide to prepare the GE-810 for reporting into Plaspy and to validate basic connectivity.

Plaspy uses shared server settings across supported devices and automatically detects tracker protocol, while exact manufacturer side steps can vary by firmware, hardware revision, installation type, and vendor tools. The GE-810 supports SMS based configuration commands shown below and leverages cellular connectivity to send events and telemetry to Plaspy once the server and APN are configured correctly.

## Configuration Overview

The goal of configuration is to prepare the GE-810 to communicate reliably with Plaspy so monitoring teams receive timely events, voice logs, and tamper alerts. Configuration typically sets the device APN, server endpoint, transport, reporting intervals, and an identifying alias so the device appears correctly in the Plaspy platform.

- Configure the operator APN so the device has mobile data access for reporting.
- Set the Plaspy server endpoint and port so the device sends telemetry to the correct destination.
- Choose the transport type if the device requires UDP or TCP selection.
- Set a reporting interval so regular updates reach Plaspy and allow visibility in the dashboard.
- Validate connectivity with a verification command and confirm the device is visible in Plaspy.

## Plaspy Server Settings

Use these exact public Plaspy server settings when configuring the GE-810 for Plaspy:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; configure the device for the transport it requires
- Plaspy automatically detects the tracker protocol

Note that Plaspy uses the same port for all supported devices and that automatic protocol detection removes the need to select a protocol on the Plaspy side once the device is pointed to the server.

## Typical Requirements Before Setup

- A charged GE-810 device with battery installed and ready for configuration.
- An active cellular SIM with data enabled and the correct APN for the operator.
- Access to a phone or SMS gateway capable of sending configuration SMS messages to the device.
- The device IMEI number available for use when creating an identifying alias or when registering the device.
- Knowledge of the operator APN and, if required, APN username and password.
- Access to Condor manufacturer instructions or tools for device specific behaviors and firmware peculiarities.

## How This Tracker Connects to Plaspy

The GE-810 transmits device events, status, and voice event logs over the cellular network to the shared Plaspy server endpoint. Once the server settings and APN are applied, the device will report on its configured interval and push alerts such as tamper or vibration events so monitoring teams see real time activity.

- The device sends telemetry and event messages to the Plaspy server endpoint d.plaspy.com or 54.85.159.138 on port 8888.
- Plaspy accepts connections using UDP or TCP while automatically detecting the device protocol.
- Regular position and status updates appear in Plaspy according to the configured reporting interval.
- Tamper, removal, and vibration events are reported immediately so supervisors can respond.
- Verification commands can be used to confirm the device is connected to the configured server before platform validation.

## Common Configuration Workflow

1. Access the official Condor configuration method for the GE-810, typically SMS commands or the vendor supplied tool, and confirm the device is responsive.
2. Enter the Plaspy server as either d.plaspy.com or 54.85.159.138 in the device server configuration.
3. Set the server port to 8888 which is the shared Plaspy port used for all devices.
4. Choose UDP or TCP on the device if a transport selection is required by the firmware.
5. Configure the operator APN and any APN username or password required by the SIM operator.
6. Apply or save the configuration and restart the device if the device requires a reboot for changes to take effect.
7. Validate the device reports to Plaspy using the device verification command or by confirming visibility in the Plaspy platform.

## Example Configuration Commands

The GE-810 supports SMS based configuration. The following public SMS commands show a typical setup flow. The sample device password used in these commands is 0000 which is the documented default in the public configuration content. Replace placeholders before sending.

- Set the operator APN. Replace {{apn}} with your operator APN. If your operator requires an APN username or password, include {{apnu}} and {{apnp}} where shown.
```
APN,0000,{{apn}}
APN,0000,{{apn}},{{apnu}},{{apnp}}
```
- Set a 5 digit identifier (alias) to identify the device in your system. Use the last 5 digits of the IMEI. Example if IMEI ends with 67890:
```
ALIAS,0000,67890#
```
- Set the timezone to UTC 0
```
GMT,0000,-0#
```
- Set the GPRS server to Plaspy using the public IP and port. This command explicitly points the device to Plaspy
```
SERVIDOR,0000,54.85.159.138,8888,U,A#
```
- Set the update interval to every 1 minute
```
INTERVALO,0000,M,6#
```
- Enable GPRS mode on the device
```
GPRS,0000,A#
```
- Check the current connection and settings
```
CONEXION,0000#
```

Notes on placeholders and values
- {{apn}}, {{apnu}}, {{apnp}}: keep these placeholders and replace them with your mobile operator APN, APN username, and APN password as required.
- Alias format: replace the example alias with the actual last five digits of the device IMEI.
- The SERVIDOR command above uses the public Plaspy IP and the shared port 8888 and includes a transport indicator; preserve the order shown when issuing commands.

## Configuration Notes

- SMS based setup is supported and commonly used for initial provisioning; follow Condor guidance for rate limits and SMS formatting.
- Firmware or hardware revisions can change command syntax or supported parameters; consult Condor documentation for device specific syntax differences.
- The device may allow selection between UDP and TCP; choose the transport required by the firmware and set the server accordingly. Plaspy will automatically detect the tracker protocol once the device reaches the server.
- Confirm the operator APN settings and test data connectivity before relying on frequent reporting intervals to avoid unexpected data usage.
- The sample default device password in public commands is 0000; verify whether your unit uses a different default and consider changing default credentials if supported.

## Why Use Plaspy with This Configuration

Using the GE-810 with Plaspy centralizes event reporting, tamper and removal alerts, and voice event logs in a single monitoring platform. For organizations running supervised release or similar programs, this setup helps ensure timely incident visibility and consistent reporting across devices. Pointing the GE-810 to the shared Plaspy endpoint with the correct APN and transport settings is the key step to integrate device events into monitoring workflows.

To learn more about Plaspy and how the platform handles device connectivity and monitoring, visit https://www.plaspy.com. For the latest device specific commands, firmware notes, and manufacturer guidance for the GE-810, verify details with Condor at https://condorskyseeker.com/ as manufacturer specifications and configuration methods can change over time.
