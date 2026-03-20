---
slug: /maxtrack/mxt_140/configuration
id: mxt_140-configuration
sidebar_label: Configuration
title: Maxtrack - MXT-140 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Maxtrack MXT-140 showing how to point the device to Plaspy for tracking and reporting
keywords:
  - Maxtrack MXT-140
  - MXT-140 configuration
  - Maxtrack tracker setup
  - MXT-140 server configuration
  - MXT-140 setup for Plaspy
  - GPS tracker configuration
  - vehicle tracking configuration
  - Plaspy tracker setup
  - GPS fleet management
  - Maxtrack configuration guide
---

# Maxtrack - MXT-140 Configuration

This page covers the public configuration context for using the Maxtrack MXT-140 tracker with Plaspy. It explains the practical, publicly available setup steps and the server settings Plaspy requires so you can prepare the tracker for reporting into the Plaspy platform. Where manufacturer-side steps are required, this guide points to the common, documented approaches such as SMS-based configuration that are used with this model.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary depending on firmware, hardware revision, installation type, and vendor tools. The MXT-140 can be configured by SMS according to public commands, and this page highlights how to apply those public commands and validate connectivity to Plaspy's endpoint.

## Configuration Overview

The goal of the configuration process is to prepare the MXT-140 to send its location and device messages to the Plaspy backend so the device appears and reports correctly in your Plaspy account. The MXT-140 is commonly configured using the manufacturer's configuration channel (for this model a public SMS command is available), and you will set the server endpoint, transport, and any APN/network values required for GPRS.

- Set the tracker to report to Plaspy's shared server endpoint so the platform can ingest location and event data.
- Provide the device with APN or network settings so it can open GPRS data sessions if required.
- Apply the server address and port so the MXT-140 sends telemetry to Plaspy on the correct endpoint.
- Validate the device ID and confirm the device reports into Plaspy after configuration.
- Use the manufacturer's documented SMS or configuration tools to apply the public command format shown below.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Typical Requirements Before Setup

- Power the device according to the manufacturer instructions so it can accept configuration and network connections.
- A working SIM card with data or SMS capability and an appropriate APN for your mobile operator.
- The device IMEI or tracker ID (trackerID) so the device can be identified in Plaspy and replaced in SMS placeholders.
- Access to the manufacturer configuration method or documentation for the MXT-140 (SMS commands or vendor tool).
- A Plaspy account or device registration workflow to confirm the device becomes visible once it reports.
- Basic knowledge of APN placeholders such as [apn], [apnu], and [apnp] so they can be replaced with your network values.

## How This Tracker Connects to Plaspy

The MXT-140 is configured to send its location and device messages to the shared Plaspy server endpoint and port so Plaspy can process and display device telemetry. Configuration typically attaches the tracker to Plaspy by updating server and network fields, after which the device will initiate reporting sessions.

- The tracker is pointed to the Plaspy endpoint (d.plaspy.com or 54.85.159.138) and port 8888.
- The device uses GPRS data to open a connection and send position reports to Plaspy.
- Plaspy accepts connections over UDP or TCP and detects the device protocol automatically.
- After configuration, Plaspy will receive telemetry so the device becomes visible and can be monitored.
- Administrative validation in Plaspy confirms the device IMEI or tracker ID and starts displaying location and events.

## Common Configuration Workflow

1. Access the official Maxtrack configuration method or software as documented by the manufacturer (for MXT-140 this commonly includes SMS configuration).
2. Prepare the device ID (trackerID) and ensure the device is powered with an active SIM and correct APN values.
3. Enter the Plaspy server address either as d.plaspy.com or 54.85.159.138 in the manufacturer tool or SMS command.
4. Set the destination port to 8888 in the configuration step.
5. Choose UDP or TCP if the device requires transport selection; Plaspy supports both and will auto detect the protocol used.
6. Apply or save the configuration and, if necessary, restart or power cycle the device to activate the new settings.
7. Validate that the device reports to Plaspy by checking your Plaspy account for the device IMEI or tracker ID and verifying incoming telemetry.

## Example Configuration Commands

The MXT-140 can be configured by sending public SMS commands to the device. The following SMS example is provided in the public model configuration sample. The default device password shown in the public example is 0000. Replace placeholders with your actual values before sending.

- Send this SMS to the tracker phone number (replace placeholders before sending):

```text
0000,{{trackerID}},2,0,[apn],[apnu],[apnp],54.85.159.138,8888,,.
```

Notes on the command:
- 0000 is the default device password shown in the public sample. If your device uses a different password, replace it.
- {{trackerID}} must be replaced with the device IMEI or configured tracker identifier.
- [apn], [apnu], and [apnp] are placeholders for your mobile operator APN, APN username, and APN password. Replace them with the correct values for the SIM in the device.
- The command sets the server IP to 54.85.159.138 and port to 8888 which correspond to Plaspy. Do not remove these values unless instructed by official Maxtrack documentation.
- This command format is the public SMS-based setup example; follow the manufacturer's exact sending procedure and syntax for your firmware version.

## Configuration Notes

- Firmware and hardware revisions may slightly change command syntax or supported parameters; always cross-check with the official Maxtrack documentation for your device revision.
- The MXT-140 public example uses SMS for configuration. Manufacturer tools or USB/programming interfaces may also be available depending on your vendor and firmware.
- Plaspy accepts both UDP and TCP on the shared port 8888 and will automatically detect the tracker protocol; pick the transport required by your installation if the tracker asks.
- If you change the default device password after initial setup, record it securely so future remote commands or support actions can be performed.
- Use the APN placeholders carefully; incorrect APN values will prevent the device from establishing GPRS data sessions to send telemetry.

## Why Use Plaspy with This Configuration

Using the MXT-140 with Plaspy provides a straightforward path to fleet visibility and operational monitoring. Pointing the device to Plaspy's shared server endpoint and port allows the platform to receive location and event data so teams can track assets, review status, and respond to events from a centralized system.

To learn more about Plaspy and how it ingests tracker data, visit https://www.plaspy.com. For the latest device-specific configuration methods, firmware notes, and manufacturer details, verify the information on the Maxtrack site https://maxtrack.com.br as manufacturer specifications and setup procedures can change over time.
