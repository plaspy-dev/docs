---
slug: /appello/anywhere/configuration
id: anywhere-configuration
sidebar_label: Configuration
title: Appello - Anywhere Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Appello Anywhere showing Plaspy server settings and SMS setup steps
keywords:
  - Appello Anywhere configuration
  - Appello Anywhere setup
  - Appello Anywhere server settings
  - Appello Anywhere APN setup
  - Appello Anywhere SMS configuration
  - Appello Anywhere GPRS setup
  - Appello Anywhere tracking configuration
  - Appello GPS tracker Plaspy
  - Appello Anywhere installation guide
  - Appello Anywhere tracking platform
---

# Appello - Anywhere Configuration

This page covers the public configuration context for using the Appello Anywhere GPS tracker with the Plaspy platform. It explains the shared Plaspy server settings you must point the tracker to, the typical preparation steps, and the example SMS commands that are publicly documented for this device. Use this guide to prepare the tracker for Plaspy while also consulting official manufacturer documentation for device specific details.

Plaspy uses the same shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The Appello Anywhere supports GSM and GPRS connectivity and can be configured via SMS as shown in the public commands below; adapt the instructions to your device firmware and operator APN details.

## Configuration Overview

Configuring the Appello Anywhere for Plaspy prepares the tracker to send its location and status to a single Plaspy endpoint and port. The public configuration flow for this model often uses SMS commands to set APN, server address, and reporting interval, and may include an optional factory reset for clean installs.

- Set the device APN so GPRS data can be established with the mobile operator.
- Configure the device to report to the Plaspy server endpoint and port.
- Confirm transport mode (UDP or TCP) if the tracker requires selection.
- Set an appropriate reporting interval to control update frequency.
- Validate the device is visible and reporting correctly in Plaspy after configuration.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- A charged Appello Anywhere device with an active SIM card provisioned for GPRS data and SMS.
- Knowledge of the mobile operator APN, and optionally APN username and password if required.
- The device default password for SMS commands (the public sample uses 123456).
- Access to the manufacturer's SMS command list or configuration tool for your firmware revision.
- A test plan to validate the device appears in Plaspy after configuration.

## How This Tracker Connects to Plaspy

The Appello Anywhere sends location and device data over the cellular GPRS connection to the Plaspy server endpoint and port. Once configured to the shared Plaspy address and port, Plaspy will receive the device's packets and automatically identify the protocol used by the tracker.

- The tracker uses GPRS to open a connection to the Plaspy endpoint.
- Data is sent to the Plaspy server endpoint at d.plaspy.com or 54.85.159.138 on port 8888.
- The tracker may use UDP or TCP as its transport on port 8888.
- Plaspy automatically detects the tracker protocol when messages arrive.
- After successful configuration the device becomes visible and reportable in Plaspy for monitoring and event tracking.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software, or prepare to send SMS configuration commands according to the device manual.
2. Enter the Plaspy server endpoint as d.plaspy.com or the server IP 54.85.159.138 in the server or GPRS server field.
3. Set the communication port to 8888 as required for all Plaspy devices.
4. Choose UDP or TCP if the device requires a transport selection; otherwise leave transport at the device default and rely on Plaspy automatic detection.
5. Configure the operator APN and any APN credentials needed for GPRS connectivity.
6. Apply or save the configuration and restart the device if the manufacturer instructions require a reboot.
7. Validate that the device reports to Plaspy and appears in the platform with expected updates.

## Example Configuration Commands

The Appello Anywhere public configuration can be performed by sending SMS commands to the device. The sample commands below are provided in the manufacturer supplied format. The sample setup uses the device default password 123456. Preserve the placeholders when substituting your operator credentials.

- Optional initial factory reset (use only when you need to reset configuration):
```text
format
```

- Set the operator APN (replace {{apn}}, {{apnu}}, and {{apnp}} with your operator values; some providers do not require username or password):
```text
00011,123456apn,{{apn}},{{apnu}},{{apnp}}
```
Explanation: {{apn}} is the mobile data APN string. {{apnu}} is the APN username if required. {{apnp}} is the APN password if required.

- Set the GPRS server to report to Plaspy using the public server IP and port:
```text
00011,123456ip,54.85.159.138,8888
```
Note: The device can also be pointed to the domain d.plaspy.com where supported by the device software. This example uses the public IP as documented.

- Set reporting interval to 60 seconds:
```text
00011,123456t060s
```
Explanation: This command configures the update interval to 60 seconds. Adjust the interval as needed for your use case and data plan.

Send each SMS according to the device manual and wait for the device confirmation SMS if the tracker returns acknowledgements.

## Configuration Notes

- Manufacturer firmware versions and command syntax can differ; always confirm the exact SMS format with the device manual for your firmware revision.
- The example commands use the public device default password 123456; change device passwords where possible to improve security.
- Some trackers accept a domain name or an IP for server configuration. The public example sets the IP 54.85.159.138 and Plaspy also accepts d.plaspy.com.
- Choose UDP or TCP according to device capabilities; Plaspy accepts both and will auto detect the tracker protocol.
- SMS based setup is a common method for this model but vendor tools or serial configuration interfaces may also be available depending on the device version.

## Why Use Plaspy with This Configuration

Using the Appello Anywhere configured to report to Plaspy gives organizations a straightforward path to centralize GPS location, status reporting, and operational visibility. Plaspy’s shared server endpoint and automatic protocol detection simplify onboarding multiple devices by reducing per-device server configuration differences.

To learn more about Plaspy and supported device integration visit https://www.plaspy.com. For the latest device specific setup details, firmware notes, and official command references verify information on the manufacturer website http://www.cnjeo.com/. Device specific methods and firmware behavior can change over time so always confirm with the vendor documentation.
