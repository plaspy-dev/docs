---
slug: /totemtech/at04/configuration
id: at04-configuration
sidebar_label: Configuration
title: Totemtech - AT04 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Totemtech AT04 and Plaspy compatibility with server settings and SMS commands
keywords:
  - Totemtech AT04 configuration
  - Totemtech AT04 setup
  - Totemtech AT04 Plaspy
  - AT04 GPS tracker configuration
  - AT04 server configuration
  - Totemtech tracker setup
  - Plaspy tracker configuration
  - vehicle GPS tracker setup
  - AT04 SMS configuration
  - GPS platform integration
---

# Totemtech - AT04 Configuration

This page documents the public configuration context for using the Totemtech AT04 tracker with the Plaspy platform. It collects the practical server values, common prerequisites, and public SMS commands that are commonly used to point the AT04 at Plaspy for real time tracking and fleet management. Use this guide alongside the manufacturer documentation to ensure an accurate setup for your hardware and firmware.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while the exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The AT04 supports configuration by SMS, over GPRS or cellular data, and via the manufacturer Windows configuration tool, so pick the method that matches your device and installer practices.

## Configuration Overview

Configuring the AT04 for Plaspy prepares the tracker to send GNSS positions and telemetry to a single Plaspy endpoint so the device becomes visible in the Plaspy platform. The process typically includes setting the cellular APN, pointing the device at the Plaspy server, selecting the transport method if required, and confirming reporting intervals and ACK settings. The public SMS commands below are an example method for devices using SMS configuration.

- Set the device APN and any APN credentials so the tracker can open a GPRS session.
- Configure the GPRS server to point to Plaspy using the shared server address and port.
- Choose UDP or TCP transport on the device if a transport selection is required.
- Set reporting intervals and ACK behavior so the device reports at the expected cadence.
- Validate connectivity so the tracker appears and reports correctly in Plaspy.

## Plaspy Server Settings

Use the following public Plaspy settings when configuring the AT04. Plaspy uses the same port for all supported devices and automatically detects the tracker protocol.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and uses the same port across devices

## Typical Requirements Before Setup

- A valid SIM card with an active data plan and SMS capability for initial SMS based setup when required.
- Knowledge of the network APN, and credentials if required by the mobile operator to enable GPRS data.
- Access to an SMS capable phone for sending commands or the Windows configuration tool and a USB cable for software based configuration.
- Device power and correct wiring so the unit remains online during configuration and testing.
- The AT04 default configuration password 000000 if performing SMS based configuration unless it has been changed by the vendor or installer.
- A plan to verify connectivity on Plaspy after configuration so reporting and alarms are validated.

## How This Tracker Connects to Plaspy

When configured, the AT04 will send GNSS positions and telemetry over the cellular network to the shared Plaspy server endpoint and port. Plaspy ingests the position, sensor, and event data and makes it available for mapping, alerts, and reporting. Plaspy uses a single port and auto detects the device protocol to simplify integration across models.

- The tracker opens a GPRS session using the operator APN and credentials, then sends data to the Plaspy server endpoint.
- Device reports location and telemetry updates at configured intervals or immediately when alarms occur.
- Alarm and input events such as SOS, tamper, and immobilizer changes are transmitted to Plaspy for real time notification.
- Plaspy displays live position, historical tracks, and telemetry dashboards based on the device data.
- Transport can be either UDP or TCP depending on the selected device configuration and network conditions.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software, for example the AT04 Windows configuration tool or SMS command interface.
2. Enter the Plaspy server domain d.plaspy.com or the Plaspy server IP 54.85.159.138 in the server or GPRS server setting.
3. Set the port to 8888 which Plaspy uses for all supported devices.
4. Choose UDP or TCP if the device requires a transport selection.
5. Configure the operator APN and any APN username and password needed for GPRS connectivity.
6. Apply or save the configuration to the device and restart the device if the method or firmware requires a restart.
7. Validate that the device reports to Plaspy and that positions and events appear in the platform.

## Example Configuration Commands

The AT04 supports SMS based configuration. The following public SMS commands are provided in the order shown by the manufacturer. The device default password is 000000. Send each line as an SMS from an authorized phone to the device SIM number.

- Optional initial factory reset command
```text
*000000,007#
```
Use this only if you need to reset the device to factory defaults prior to configuration.

- Set the operator APN with placeholders
```text
*000000,002,{{apn}},{{apnu}},{{apnp}}#
```
Replace {{apn}} with the operator APN string. Replace {{apnu}} and {{apnp}} with the APN username and password if required. If the APN does not require username or password, leave those placeholders empty as supported by the device firmware.

- Set the GPRS server to Plaspy using the server IP and port
```text
*000000,003,54.85.159.138,8888,1
```
This command points the tracker to Plaspy by IP and port. The final parameter is part of the device command format and may select connection mode per firmware.

- Enable ACK or server acknowledgement behavior
```text
*000000,019,1#
```
This command configures ACK behavior as defined by the manufacturer.

- Set the reporting interval to 60 seconds
```text
*000000,60,60,0,60#
```
This command sets time based reporting parameters; adjust values as needed for your reporting policy.

Note on sending commands: send each command as a single SMS string exactly as shown, substituting placeholders when required. If a different configuration method is used, such as the Windows tool, apply the same server domain or IP and port values described in this guide.

## Configuration Notes

- Firmware differences and vendor tool versions can change command syntax and parameter meanings. Confirm commands with the device firmware documentation.
- TCP versus UDP choices can affect delivery behavior and mobile data usage. Choose the transport that matches your network and platform expectations.
- The APN placeholders {{apn}}, {{apnu}}, and {{apnp}} must be replaced with operator specific values. If the operator does not require username or password, those fields can often be left blank.
- SMS based setup is a practical method for field installations, while the Windows configuration tool may be faster for bulk provisioning or when a USB connection is available.
- Keep the default password 000000 in mind for initial setup and change it if the device workflow supports password updates after provisioning.

## Why Use Plaspy with This Configuration

Using the AT04 with Plaspy gives organizations a compact tracker that supplies continuous GNSS and telemetry data to a centralized platform for mapping, alerting, and reporting. The AT04 features such as low power operation, tamper detection, and remote immobilizer control pair well with Plaspy to provide situational awareness, event notifications, and historical trip analysis for mixed fleets.

To learn more about Plaspy and how it can work with Totemtech devices visit https://www.plaspy.com. For the latest device specific details, firmware notes, and manufacturer configuration guides verify current information at the Totemtech website http://www.totemtek.com/ as vendor documentation may change over time.
