---
slug: /castel/idd_213gl/configuration
id: idd_213gl-configuration
sidebar_label: Configuration
title: Castel - IDD-213GL Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for Castel IDD 213GL GPS tracker covering Plaspy server settings SMS commands and prerequisites
keywords:
  - Castel IDD 213GL configuration
  - Castel tracker setup
  - IDD 213GL Plaspy
  - Castel GPS configuration
  - OBD tracker configuration
  - vehicle tracking setup
  - Plaspy server configuration
  - GPS tracker server setup
  - fleet management tracker
  - OBD II GPS tracker
---

# Castel - IDD-213GL Configuration

This page covers the public configuration context for using the Castel IDD-213GL with Plaspy. It explains the shared server settings, practical setup steps that are commonly used in the field, and the SMS configuration commands that are publicly available for this model. Use this guide to prepare the device for reporting to the Plaspy backend and to validate connectivity before onboarding the device in your Plaspy account.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The IDD-213GL supports GPRS and SMS data transmission and can be configured via SMS commands or vendor configuration tools; this page references the public SMS command examples provided in the device documentation and shows how to point the device at the Plaspy server endpoint.

## Configuration Overview

Configuring the Castel IDD-213GL for Plaspy prepares the device to transmit location and diagnostic data to a single Plaspy server endpoint and port. The process typically sets network APN values, tells the tracker where to send its data, and verifies that the tracker is visible in Plaspy. Because Plaspy uses the same port for all devices and automatically detects the tracker protocol, configuration focuses on network and server settings rather than protocol selection.

- Set the device APN and network credentials so the tracker can use GPRS to reach the Internet.
- Configure the tracker server address and port so data is sent to Plaspy.
- Choose the transport type (UDP or TCP) if required by the device or firmware.
- Verify device connectivity with a readback or status check and confirm reporting in Plaspy.
- Validate diagnostic and positional data to ensure the OBD telemetry arrives as expected.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- A powered and accessible IDD-213GL device installed in the vehicle OBD or appropriate interface.
- An active SIM card configured for GPRS data and SMS if using SMS commands to configure the tracker.
- Correct APN credentials for the installed SIM carrier.
- Knowledge of the device SMS secret key or password for configuration commands; the public default rule is the last 6 ASCII characters of the device ID.
- Access to the manufacturer configuration method such as SMS commands or vendor software to apply changes.
- A way to confirm device reporting in Plaspy after configuration, such as platform device list or diagnostic reports.

## How This Tracker Connects to Plaspy

The IDD-213GL reports vehicle location and diagnostic information to the configured backend. When pointed at the Plaspy server endpoint and port, the tracker will transmit its telemetry over the chosen transport so Plaspy can ingest and present the data. Plaspy's automatic protocol detection simplifies server-side setup because the platform will accept the device connection on the shared port and interpret the protocol.

- The tracker sends GPS position reports and OBD diagnostic telemetry to the Plaspy server endpoint.
- Diagnostic items such as speed, RPM, trouble codes, and fuel or mileage statistics are transmitted according to the device reporting rules.
- Event notifications such as ignition on/off or unplug alerts are forwarded to Plaspy once configured.
- The device is configured to report to the shared Plaspy endpoint d.plaspy.com or 54.85.159.138 on port 8888.
- Choose UDP or TCP transport on the device as required by installation or firmware; Plaspy accepts either on port 8888.

## Common Configuration Workflow

1. Access the official Castel configuration method for the IDD-213GL, for example SMS configuration or vendor software.
2. Enter the Plaspy server address using either the domain d.plaspy.com or the IP 54.85.159.138 as the server target.
3. Set the server port to 8888 (Plaspy uses the same port for all supported devices).
4. Choose UDP or TCP transport if the device requires a transport selection.
5. Configure APN and any required APN username and password values so the device can use GPRS.
6. Apply or save the configuration and restart the device if required by the manufacturer.
7. Validate that the device reports to Plaspy by checking device connectivity and recent messages in the platform.

## Example Configuration Commands

The IDD-213GL documentation includes SMS commands for GPRS and server setup. The device uses a secret key for SMS configuration. According to the public guidance, the default secret key for SMS instructions is the last 6 ASCII characters of the device ID. Replace placeholders when sending commands.

- Set APN settings and the Plaspy server IP and port
```
*{{SecretKey}}#set gprs#[apn],[apnu],[apnp],54.85.159.138,8888*
```

- Check current GPRS settings on the device
```
*{{SecretKey}}#get gprs#*
```

Notes on placeholders and usage:
- {{SecretKey}} — the SMS configuration password. Public default rule: the last 6 ASCII characters of the device ID unless the installer or vendor has changed it.
- [apn] — the APN string for the SIM card carrier.
- [apnu] — the APN username if required by the carrier; leave empty if not required.
- [apnp] — the APN password if required by the carrier; leave empty if not required.
- Use either d.plaspy.com or 54.85.159.138 for the server field; the example command uses the IP address and port 8888 as required by Plaspy.
- If your device or firmware requires explicit transport selection, use the manufacturer tool or documentation to choose UDP or TCP; the SMS command above sets server and port but may not set transport on all firmware versions.

## Configuration Notes

- Firmware versions and vendor tools can change command syntax or available fields; always confirm with the latest manufacturer documentation.
- The SMS configuration method is supported by the public device guidance; when using SMS, ensure the SIM has SMS enabled and the device can receive messages.
- Keep APN username and password placeholders intact when not required by the operator; a blank username or password is a valid value for many carriers.
- Consider choosing UDP or TCP based on network reliability and your monitoring needs; Plaspy accepts both on port 8888.
- The device secret key is important for security and must be known before sending SMS configuration commands.

## Why Use Plaspy with This Configuration

Using the Castel IDD-213GL with Plaspy brings OBD diagnostic insights together with real time location reporting to provide vehicle and fleet visibility in a single platform. Organizations can combine positional tracking with diagnostic and driving behavior data collected by the IDD-213GL to monitor performance, respond to alerts, and analyze trends across a vehicle fleet.

To learn more about Plaspy and how it ingests data from compatible trackers visit https://www.plaspy.com. For the latest device specific configuration methods, firmware notes, and manufacturer details verify information on the Castel website http://www.castelecom.com/ as device behavior and setup commands can change over time.
