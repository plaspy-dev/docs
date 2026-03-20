---
slug: /meitrack/gt_60/configuration
id: gt_60-configuration
sidebar_label: Configuration
title: Meitrack - GT-60 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Meitrack GT 60 showing how to connect the device to Plaspy with server settings SMS commands and setup steps
keywords:
  - Meitrack GT 60 configuration
  - Meitrack GT 60 setup
  - Plaspy tracker configuration
  - GT 60 SMS commands
  - Meitrack server settings
  - GPS tracker setup
  - Pet tracker configuration
  - GT 60 GPRS setup
  - Plaspy GPS integration
  - Meitrack tracking platform
---

# Meitrack - GT-60 Configuration

This page covers the public configuration context for using the Meitrack GT-60 with Plaspy. It gathers the practical server settings and sample SMS commands published in public documentation so you can prepare the device to report to Plaspy for location visibility and monitoring. The GT-60 is a compact pet and portable personal tracker with GPS and GSM capability and supports SMS based configuration methods that are commonly used for initial setup.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary depending on firmware, hardware revision, installation type, and vendor tools. This guide focuses on the Plaspy endpoint and the public SMS commands sample for the GT-60 so you can apply the correct server information and validate connectivity before adding the device to the Plaspy platform.

## Configuration Overview

Preparing a GT-60 for use with Plaspy means setting the device to send its location and event reports to the Plaspy server endpoint and confirming that it is reachable. For the GT-60 this commonly uses SMS based commands to configure GPRS server details, reporting interval, timezone, and event reporting.

- Configure the GT-60 to report to Plaspy server settings so position and events reach the platform
- Set the reporting interval and time zone to match your tracking needs and local time
- Validate GPRS and SMS connectivity to ensure the device can reach Plaspy
- Use the provided SMS command examples to apply server IP or domain and APN placeholders
- Confirm the device appears in Plaspy after applying settings and restarting if required

## Plaspy Server Settings

- Server domain d.plaspy.com for device configuration and reporting
- Server IP 54.85.159.138 as an alternate server endpoint option
- Port 8888 which is the single port Plaspy uses for all devices
- Transport support for UDP or TCP depending on device selection
- Plaspy automatically detects the tracker protocol for incoming device connections

## Typical Requirements Before Setup

- A charged GT-60 device and physical access to it for SMS based configuration or to a device administrator
- An active SIM card installed in the device with a valid data plan or SMS capability as required
- Knowledge of the APN settings for the SIM carrier to populate the {{apn}} placeholder and optional {{apnu}} and {{apnp}} values
- Access to a mobile phone capable of sending SMS commands to the GT-60 using the device password
- The default device password if unchanged is shown in the example commands as 0000
- Access to Meitrack official configuration documentation or tools for reference and firmware specific details

## How This Tracker Connects to Plaspy

The GT-60 is configured to report its location and events to the shared Plaspy server endpoint and port so the device data becomes visible in the Plaspy platform. Configuration typically uses SMS commands to set the GPRS server, update interval, and event reporting behavior so the tracker can initiate connections to Plaspy over cellular data.

- The device sends periodic location reports to d.plaspy.com or 54.85.159.138 on port 8888
- Transport is selected as UDP or TCP on the device if required by the firmware
- Plaspy automatically detects the tracker protocol when the tracker connects to the server
- Event reporting and periodic updates are enabled by SMS commands to control what the tracker sends
- After configuration the device can be validated by confirming it appears and reports on Plaspy

## Common Configuration Workflow

1. Access the official Meitrack configuration method or software or prepare to send SMS commands per the GT-60 public procedure
2. Enter d.plaspy.com or 54.85.159.138 as the GPRS server destination on the device
3. Set the server port to 8888 which Plaspy uses for all devices
4. Choose UDP or TCP on the device if the firmware requires you to select a transport
5. Apply or save the configuration on the device using the provider method or by sending the required SMS commands
6. Restart the device if the device or firmware requires a reboot to apply network changes
7. Validate that the device reports to Plaspy by checking for incoming data in the platform and confirming periodic updates

## Example Configuration Commands

The GT-60 sample public commands are commonly sent by SMS to the device. The sample below uses the default device password 0000. The commands are presented in the order shown in public documentation. The factory settings command is optional and should only be used when you intend to reset the device during initial setup.

1. Optional initial factory reset command
```
0000,F11
```
Use this only if you want to restore factory settings before applying new configuration. This step is optional and should be used with caution.

2. Set the GPRS server to Plaspy using IP and port with APN placeholder
```
0000,A21,2,54.85.159.138,8888,{{apn}},{{apnu}},{{apnp}}
```
- This command sets the GPRS server to the Plaspy server IP and port. The example includes placeholders for APN settings.
- {{apn}} is your carrier APN. {{apnu}} and {{apnp}} are optional APN username and APN password placeholders. If your carrier requires no username or password, you may omit those values according to device rules.

3. Set the time zone to UTC 0
```
0000,B36,0
```
- Set the tracker time zone. Adjust the numeric value if a different timezone offset is required.

4. Set the update interval to every 1 minute
```
0000,A12,6,0
```
- This sample sets the location update interval. The exact A12 parameters map to the device firmware update interval scheme shown in public documentation.

5. Set event reporting
```
0000,C03,0
```
- This command sets event reporting per the GT-60 public command set. Adjust parameters as needed for your event preferences.

Note on placeholders and formatting
- Keep placeholders {{apn}} {{apnu}} and {{apnp}} when preparing commands and replace them with your carrier values before sending SMS
- The examples preserve the command order that is important for initial configuration

## Configuration Notes

- Manufacturer firmware and regional hardware revisions can change the exact SMS command syntax and available parameters so verify commands against the current Meitrack documentation
- The GT-60 supports SMS based configuration as shown in the examples but Meitrack may also provide PC tools or server side provisioning in some markets
- When a device requires selection of UDP or TCP, choose the transport supported by your deployment and confirm Plaspy supports automatic protocol detection
- Default passwords such as 0000 are commonly used in public examples; consider changing the device password after initial setup if supported
- APN values vary by mobile carrier so confirm the correct APN and optional credentials before sending the A21 command

## Why Use Plaspy with This Configuration

Using Plaspy with the Meitrack GT-60 enables centralized visibility of location and event reports so operators can monitor devices in near real time and use the platform tools for tracking and operational oversight. The shared Plaspy server settings and automatic protocol detection simplify onboarding since the same port and endpoint conventions apply across supported devices.

To learn more about Plaspy visit https://www.plaspy.com and for the most current device specific configuration and firmware information please verify details on the manufacturer site https://www.meitrack.com/
