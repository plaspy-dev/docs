---
slug: /castel/pt_719/configuration
id: pt_719-configuration
sidebar_label: Configuration
title: Castel - PT-719 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure the Castel PT-719 tracker to report to Plaspy using shared server settings and SMS commands
keywords:
  - Castel PT-719 configuration
  - Castel PT-719 setup for Plaspy
  - Castel PT-719 server configuration
  - Castel PT-719 GPS tracker setup
  - Castel PT-719 SMS configuration
  - PT-719 Plaspy setup
  - Castel GPS tracker configuration
  - PT-719 APN settings
  - PT-719 tracking platform
  - Castel PT-719 RFID attendance
---

# Castel - PT-719 Configuration

This page covers the public configuration context for using the Castel PT-719 GPS tracker with Plaspy. It collects the publicly available steps and SMS-based commands that installers and administrators commonly use to point the device to Plaspy and validate that the tracker is reporting successfully. Use this page as a practical reference for applying the shared Plaspy server settings to the PT-719.

Plaspy uses shared server settings across all supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The PT-719 supports SMS configuration commands as part of its documented workflow; the instructions below show how to apply the Plaspy endpoint and relevant APN values using those public commands and manufacturer guidance.

## Configuration Overview

The goal of configuration is to prepare the PT-719 so it reliably communicates location and status to Plaspy and appears in your Plaspy account. For the PT-719 this typically means provisioning network access, setting APN values, and directing the tracker to the Plaspy server endpoint and port.

- Point the device to Plaspy server endpoint so telematics data reaches the platform.
- Configure APN credentials so the tracker can use mobile data for reporting.
- Set the shared Plaspy port to ensure consistent reception across devices.
- Validate the device is visible and reporting in Plaspy after configuration.
- Use SMS or the manufacturer tool to apply settings depending on your installation.

## Plaspy Server Settings

Use the following Plaspy server settings when configuring the PT-719. Plaspy uses the same port for all devices and automatically detects the tracker protocol.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP (device may be configured to use either transport)
- Plaspy automatically detects the tracker protocol so the same port and server work for supported models

## Typical Requirements Before Setup

- Device powered and accessible so configuration SMS or manufacturer tool commands can be applied.
- A working 2G SIM with data enabled and correct APN information for the carrier.
- Ability to send SMS messages from a mobile phone or SMS gateway to the tracker if using SMS provisioning.
- Access to the official manufacturer configuration method or software and any required credentials.
- Knowledge of the tracker device ID so you can derive the default SMS secret key if required.
- A Plaspy account configured to receive the device once it starts reporting.

## How This Tracker Connects to Plaspy

The PT-719 is configured to report its location and status to the shared Plaspy server endpoint and port. Once the device has mobile connectivity and the APN and server settings are applied, it will send its position and status updates so you can monitor the device in Plaspy.

- The tracker sends data to d.plaspy.com or directly to 54.85.159.138 on port 8888.
- Transport can be UDP or TCP depending on device settings or installer choice.
- Plaspy receives the incoming data and automatically detects the device protocol for processing.
- Reporting enables visibility, event logging, and operational monitoring within the Plaspy platform.
- Validation in Plaspy confirms successful communication and data flow from the tracker.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software, or prepare to send SMS commands as documented by Castel.
2. Obtain the device ID and derive the default SMS secret key if the device requires a password for SMS commands.
3. Enter the Plaspy server address either as d.plaspy.com or as the IP 54.85.159.138 in the device settings or SMS command payload.
4. Set the port to 8888 in the device configuration.
5. Choose UDP or TCP if the device requires an explicit transport selection.
6. Apply or save the configuration and restart the device if required by the manufacturer.
7. Validate the device is reporting to Plaspy and visible in the platform.

## Example Configuration Commands

The PT-719 supports SMS configuration. The manufacturer provides the following SMS-based commands for GPRS and server setup. The default secret key for SMS instructions is the last 6 ASCII characters of the device ID. Keep placeholders such as [apn], [apnu], [apnp], and {{SecretKey}} as shown and replace them with your actual values.

- To set APN and server IP with port 8888 (replace placeholders and preserve order):

```
*{{SecretKey}}#set gprs#[apn],[apnu],[apnp],54.85.159.138,8888*
```

- To check the current GPRS settings on the device:

```
*{{SecretKey}}#get gprs#*
```

Notes on placeholders:
- {{SecretKey}} — default SMS key is the last 6 ASCII characters of the device ID unless changed.
- [apn] — the APN string for your mobile carrier.
- [apnu] — the APN username if required by the carrier, otherwise leave empty.
- [apnp] — the APN password if required by the carrier, otherwise leave empty.

If the PT-719 firmware or your installer tool supports entering a server domain instead of IP, you may use d.plaspy.com in place of the IP address where applicable. Some manufacturer tools accept the domain directly while SMS commands may require the IP address.

## Configuration Notes

- Firmware and software revisions can change the exact SMS syntax or available command set. Verify the command format with the latest Castel documentation before mass deployment.
- SMS provisioning is convenient for field updates but confirm the device SMS secret key and any changed default credentials before use.
- Consider the choice between UDP and TCP based on network conditions and your operational needs; Plaspy accepts either on port 8888.
- Confirm APN values with the SIM carrier and test data connectivity before relying on live reporting.
- Plaspy uses the same port for all supported devices and automatically detects the tracker protocol, simplifying server-side setup.

## Why Use Plaspy with This Configuration

Using the Castel PT-719 with Plaspy gives organizations straightforward visibility into field assets, personnel, or equipment. The PT-719 can be configured via SMS or manufacturer tools to direct its reports to Plaspy, enabling location tracking, event visibility, and centralized monitoring across many devices.

Learn more about Plaspy and how it can receive and process device data at https://www.plaspy.com. For device specific configuration commands, firmware notes, and the latest manufacturer instructions verify details on the Castel website http://www.castelecom.com/ as manufacturer specifications and setup methods can change over time.
