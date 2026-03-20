---
slug: /topfly/solarx_110/configuration
id: solarx_110-configuration
sidebar_label: Configuration
title: TopFly - SolarX 110 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for TopFly SolarX 110 to connect with Plaspy using shared server settings and SMS or device tools
keywords:
  - TopFly SolarX 110 configuration
  - TopFly SolarX 110 setup
  - SolarX 110 Plaspy configuration
  - SolarX 110 server configuration
  - SolarX 110 GPS tracker setup
  - TopFly tracker Plaspy
  - SolarX 110 APN settings
  - SolarX 110 SMS commands
  - SolarX 110 fleet tracking
  - SolarX 110 device configuration
---

# TopFly - SolarX 110 Configuration

This page summarizes the public configuration context for using the TopFly SolarX 110 with Plaspy. It focuses on the practical, platform-side settings and the common manufacturer commands that are publicly available for sending the device data to Plaspy’s endpoint. Use this guidance to prepare the tracker for communication with Plaspy before completing device registration and visibility in your Plaspy account.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer-side setup steps vary by firmware version, hardware revision, installation type, and vendor tools. The SolarX 110 supports SMS and GPRS configuration methods commonly used in the field; follow the manufacturer instructions for your hardware revision and verify any commands against TopFly documentation.

## Configuration Overview

The goal of configuration is to prepare the SolarX 110 so it reliably sends GNSS positions and telemetry to Plaspy, and to validate connectivity and reporting once applied. Below are practical objectives for the configuration process.

- Configure the device APN and network access so GPRS or LTE data is available for reporting.
- Point the device to the Plaspy server endpoint and port so data is routed to your Plaspy account.
- Set reporting intervals and behavior to match operational needs while balancing power usage for solar operation.
- Verify the device reports to Plaspy and confirm location, battery, and sensor telemetry are visible.
- Secure or change the device password from the factory default after initial setup where applicable.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; choose the transport required by the device or network
- Plaspy automatically detects the tracker protocol so all devices use the same port in the platform

## Typical Requirements Before Setup

- A charged SolarX 110 with sufficient solar or battery power and installed SIM card for mobile data
- Carrier APN details including APN name and optional username and password
- Access to the device configuration method supported by your unit such as SMS setup or the TopFly configuration tool
- Knowledge of the device default password (the sample public configuration uses 0000 as the factory default)
- Basic coverage on the carrier network (GPRS/LTE) so the device can reach Plaspy at the configured endpoint
- A Plaspy account and device registration workflow ready to receive and verify the tracker after it starts reporting

## How This Tracker Connects to Plaspy

The SolarX 110 is configured to report GNSS positions, telemetry and accessory sensor data to the Plaspy server endpoint on the shared port. Once pointed to Plaspy, the device sends its location and status updates over the selected transport and Plaspy ingests and displays those events for monitoring and alerts.

- Device transmits GNSS and telemetry to the Plaspy server endpoint d.plaspy.com or the Plaspy IP address 54.85.159.138
- Reports are sent to port 8888 which Plaspy uses for all supported devices
- Transport can be UDP or TCP according to device settings and network requirements
- Plaspy automatically detects the tracker protocol when the device connects to the server
- Once connected, you can validate live updates, alarm events, and historical tracks inside Plaspy

## Common Configuration Workflow

1. Access the official TopFly configuration method for your SolarX 110 (SMS commands, device tool, or TopFly software) as documented by the manufacturer.
2. Enter the Plaspy server domain or IP — either d.plaspy.com or 54.85.159.138 — in the device server or IP field.
3. Set the server port to 8888, matching Plaspy’s shared port for all devices.
4. Choose UDP or TCP if the device requires a transport selection for data reporting.
5. Configure APN and any required credentials for your mobile carrier so the tracker can reach Plaspy via mobile data.
6. Apply or save the configuration on the device and restart the unit if required by the manufacturer.
7. Validate that the device reports to Plaspy by confirming incoming location and telemetry in the Plaspy platform.

## Example Configuration Commands

The SolarX 110 supports SMS-based configuration in publicly available examples. The sample commands below use the device password 0000 as the factory default. Replace placeholders before sending.

- Set the device time zone to UTC 0
```sms
GMT,0000,0#
```

- Set the operator APN (replace placeholders as required)
```sms
APN,0000,[apn],[apnu],[apnp]#
```
Explanation of placeholders:
- [apn] = APN name provided by your mobile carrier
- [apnu] = APN username if required by the carrier (leave blank or omit if not required)
- [apnp] = APN password if required by the carrier (leave blank or omit if not required)

- Set the GPRS server to Plaspy by IP and port
```sms
IP,0000,54.85.159.138 8888#
```
This command points the tracker directly to the Plaspy server IP and port. You can also configure the server domain d.plaspy.com if the device accepts a domain string in place of an IP.

- Set the reporting/update interval to 60 seconds
```sms
TIMER,0000,60:60:0:0#
```
This example configures the device reporting behavior; adapt the interval to your operational needs and power budget.

Note: The order above is important for initial connectivity: APN first, then server, then reporting interval. After sending SMS commands, allow the device a short period to register on the network and start reporting.

## Configuration Notes

- Firmware and hardware revisions may change command syntax or available features; always verify commands against the device firmware version.
- SMS-based setup is a common field method for SolarX 110 devices and useful when direct USB or software access is not available.
- Choose TCP or UDP based on network reliability and your preference; Plaspy will accept data on port 8888 and auto-detect the protocol.
- Confirm APN credentials with the mobile carrier; incorrect APN settings are a frequent cause of connectivity failure.
- Replace the factory default password 0000 after initial setup when possible to improve device security.

## Why Use Plaspy with This Configuration

Pairing the SolarX 110 with Plaspy gives operations teams a practical and resilient tracking solution for solar-powered outdoor assets. The SolarX 110’s long battery life, multi-constellation GNSS and buffered storage complement Plaspy’s centralized ingestion and visualization, enabling reliable live tracking, alarm management and historical route replay for containers, trailers, and remote equipment.

To learn more about Plaspy and how the platform handles device data, visit https://www.plaspy.com. For the latest device-specific configuration methods, firmware behavior, and manufacturer details for the SolarX 110, please verify information on the TopFly website https://www.topflytech.com/ as vendor specifications and setup steps can change over time.
