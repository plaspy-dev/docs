---
slug: /astra_telematics/at202/configuration
id: at202-configuration
sidebar_label: Configuration
title: Astra Telematics - AT202 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for Astra Telematics AT202 GPS tracker configuration and Plaspy compatibility including server settings and SMS commands
keywords:
  - Astra Telematics AT202 configuration
  - AT202 setup Plaspy
  - Astra AT202 server configuration
  - AT202 GPS tracker setup
  - AT202 SMS configuration
  - Plaspy tracker configuration
  - Fleet tracker AT202
  - AT202 GPRS LTEM setup
  - Vehicle telematics AT202
  - AT202 installation guide
---

# Astra Telematics - AT202 Configuration

This page covers the public configuration context for using the Astra Telematics AT202 with Plaspy. It summarizes the shared Plaspy server settings you will need, presents the common setup workflow, and includes the public SMS configuration commands provided by the manufacturer that are used to point the tracker to Plaspy for data ingestion.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol so you can use a consistent endpoint for multiple tracker models. Exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools, so treat the commands here as public reference steps and verify any device specific details with the manufacturer documentation when needed.

## Configuration Overview

This configuration process prepares the AT202 to send GNSS and telematics data to Plaspy so the device becomes visible and reportable in the Plaspy platform. The public setup shown here focuses on setting the network APN when required, configuring the GPRS server endpoint and port, and confirming that the tracker reports to Plaspy.

- Configure the cellular APN, username, and password if required for your SIM and operator.
- Set the device server address to the Plaspy endpoint so location and telemetry stream to Plaspy.
- Ensure the device uses port 8888 and a supported transport (UDP or TCP) as applicable.
- Validate device connectivity and confirm it reports into Plaspy for real time tracking and event reporting.
- Save and apply configuration then confirm the tracker appears and updates in the Plaspy platform.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Typical Requirements Before Setup

- Device powered and accessible either in a test bench or installed location with vehicle power applied.
- Active SIM card compatible with the device network variant and capable of GPRS or other supported cellular connectivity.
- Ability to send SMS commands from a provisioning phone or access to the manufacturer configuration tool if provided.
- Access to the AT202 user guide or quick start documentation from the manufacturer for firmware specific instructions.
- A Plaspy account or platform access to validate the device appears and sends telemetry after configuration.

## How This Tracker Connects to Plaspy

The AT202 is configured to report GNSS fixes and vehicle telemetry to the shared Plaspy server endpoint and port. Once pointed to d.plaspy.com or the Plaspy server IP and port, the device will send periodic position and event messages over the selected transport and Plaspy will parse the incoming protocol automatically.

- The tracker reports location updates and motion events to the Plaspy server at d.plaspy.com or 54.85.159.138 on port 8888.
- Telemetry such as CANBus channels, digital input events, ADC readings, and serial messages are forwarded to Plaspy for processing.
- Device connectivity, battery backup state, and movement alerts are visible in Plaspy once the device is reporting.
- Plaspy handles protocol detection for incoming device messages so a single server port can support multiple tracker protocols.

## Common Configuration Workflow

1. Access the official manufacturer configuration method such as SMS provisioning or the vendor tool documented in the AT202 user guide.
2. Configure the SIM APN settings if required by your mobile operator using the manufacturer commands or tool.
3. Enter the Plaspy server endpoint by setting d.plaspy.com or the server IP 54.85.159.138 in the device configuration.
4. Set the server port to 8888 in the device configuration.
5. Choose UDP or TCP as the transport if the device requires an explicit transport selection.
6. Apply or save the configuration and restart the device if the firmware requires a reboot for settings to take effect.
7. Validate that the device successfully reports to Plaspy and appears in your account or platform dashboard.

## Example Configuration Commands

The AT202 supports SMS based provisioning with the following public commands. Send these commands as plain text SMS messages to the device phone number in the order shown when required.

- Set the operator APN
```text
$APAD,{{apn}}
```
- Set the username of the APN operator (optional, only if your APN requires it)
```text
$APUN,{{apnu}}
```
- Set the password of the APN operator (optional, only if your APN requires it)
```text
$APPW,{{apnp}}
```
- Set the GPRS server to the Plaspy server IP
```text
$IPAD,54.85.159.138
```
- Set the server port to Plaspy port
```text
$PORT,8888
```

Notes on placeholders
- {{apn}} is the mobile operator APN name required for GPRS or cellular data.
- {{apnu}} and {{apnp}} are the APN username and password fields when the operator requires authentication.
- The IP address and port commands point the device to Plaspy. You can alternatively use d.plaspy.com where the device supports hostname entries.

## Configuration Notes

- The SMS provisioning commands shown are public manufacturer commands; some installations use the vendor configuration software instead of SMS.
- Firmware revisions or hardware variants can change command behavior or available features. Confirm commands in the device manual for your firmware version.
- Choose UDP or TCP based on your installation requirements and device firmware capability; Plaspy accepts both transports on port 8888.
- Plaspy uses the same port for all supported devices and performs automatic protocol detection so a single endpoint simplifies multi model deployments.
- If you use SMS provisioning, ensure the device is able to receive SMS and that the SIM is active before sending commands.

## Why Use Plaspy with This Configuration

Using the AT202 with Plaspy provides a straightforward path to ingesting GNSS and vehicle telematics into a single fleet management platform. Pointing the tracker to d.plaspy.com or 54.85.159.138 on port 8888 lets Plaspy automatically detect the incoming protocol and present location, CANBus data, input events and sensor readings for real time monitoring, alerts, and historical reporting.

To learn more about Plaspy and how it processes tracker data visit https://www.plaspy.com. For the most current AT202 commands, firmware notes, and device specific setup details verify information on the manufacturer website https://astratelematics.com/
