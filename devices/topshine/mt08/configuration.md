---
slug: /topshine/mt08/configuration
id: mt08-configuration
sidebar_label: Configuration
title: TopShine - MT08 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for the TopShine MT08 GPS tracker and Plaspy integration with server settings and SMS commands
keywords:
  - TopShine MT08 configuration
  - TopShine MT08 setup for Plaspy
  - MT08 GPS tracker configuration
  - MT08 server configuration
  - TopShine motorcycle tracker setup
  - MT08 SMS commands
  - MT08 APN setup
  - MT08 GPRS TCP UDP
  - MT08 Plaspy integration
  - GPS tracker configuration Plaspy
---

# TopShine - MT08 Configuration

This page covers the public configuration context for using the TopShine MT08 tracker with Plaspy. It consolidates the practical server settings, typical prerequisites, and the publicly available SMS configuration commands that installers and integrators use to point an MT08 device at the Plaspy platform. The MT08 is a compact motorcycle focused tracker that supports 4G/2G SIM connectivity plus SMS and GPRS reporting modes, and this guide uses that publicly available behavior as the basis for integration steps.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The example commands below are taken from public device configuration content and show the SMS style setup often used with the MT08; always verify the exact commands and syntax from TopShine documentation for your device firmware.

## Configuration Overview

Setting up the MT08 for Plaspy configures the device to report location and status to the shared Plaspy server endpoint so the unit becomes visible on your Plaspy dashboard and receives platform events and alerts. The process typically includes preparing the device, providing carrier APN details, selecting the transport mode if required, and sending or saving the configuration so the tracker can start delivering data.

- Configure the device to use Plaspy as its GPRS endpoint so reports reach the platform.
- Provide the carrier APN and optional APN username and password so the SIM can connect.
- Choose TCP or UDP transport as required by the installation and device firmware.
- Validate connectivity by confirming the device registers with Plaspy and reports position updates.
- Use SMS configuration commands for on site setup or the vendor configuration tool when available.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888 (Plaspy uses the same port for all supported devices)  
- Transport support for UDP or TCP (the MT08 may be configured to use either transport)  
- Plaspy automatically detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- A powered MT08 unit with a charged backup battery or connected vehicle power.
- An active SIM card installed and able to use GPRS data for the carrier in your region.
- The carrier APN and any APN credentials (username and password) if required by the SIM plan.
- Access to the TopShine SMS configuration method or the vendor configuration tool for this model.
- The device IMEI available for identification and device id setup.
- A way to send and receive SMS messages to the device from the installer phone if using SMS commands.

## How This Tracker Connects to Plaspy

When configured, the MT08 sends GPS position and status messages to the Plaspy shared server endpoint and port using the selected transport. Plaspy ingests these messages and maps them to the appropriate device record so location, alarms, and telemetry are visible on the platform.

- The MT08 is pointed at the Plaspy server endpoint or IP and the reporting port so data flows directly to Plaspy.
- The tracker uses GPRS reporting (TCP or UDP) or SMS as a fallback for message delivery.
- Plaspy automatically determines the device protocol when the tracker connects to the platform.
- Reported events such as movement, SOS, power loss, and periodic location updates become visible in Plaspy.
- After configuration the device should start appearing in the Plaspy interface once it registers.

## Common Configuration Workflow

1. Access the official TopShine configuration method for the MT08, typically SMS commands or the vendor configuration tool.
2. Enter the Plaspy server information by specifying d.plaspy.com or the Plaspy server IP 54.85.159.138 in the device settings.
3. Set the reporting port to 8888, which Plaspy uses for all supported devices.
4. Choose UDP or TCP transport if the MT08 requires transport selection.
5. Provide the carrier APN and optional APN username and password if the SIM requires authentication.
6. Apply or save the configuration on the device and restart the unit if the device or workflow requires it.
7. Validate that the MT08 reports to Plaspy by checking the device appears and updates in the Plaspy platform.

## Example Configuration Commands

Below are the publicly available SMS command templates extracted from TopShine MT08 configuration content. The sample device password used in these commands is 000000 and is shown as the default where indicated. Keep the order when performing an initial setup where order is specified.

- Reset to factory settings (optional initial step)
  
  Description: Reset device configuration to factory defaults. Use only when needed during initial setup.
  ```
  W000000,990,099###
  ```

- Set the device ID
  
  Description: Set the device identifier. The manufacturer command template uses the first 14 digits from the IMEI for the device id field in the tracker. Note that Plaspy uses the full 15 digit IMEI as the platform device identifier.
  ```
  W000000,010,<first 14 digits of IMEI>
  ```

- Set the operator APN
  
  Description: Configure the carrier APN and optional APN username and password. Replace {{apn}} with your carrier APN. If required, include {{apnu}} and {{apnp}} for APN username and password.
  ```
  W000000,011,{{apn}}[,{{apnu}},{{apnp}}]
  ```
  Note: Use the comma separated form only include the optional APN username and password fields when required by your carrier.

- Set the GPRS server to Plaspy by IP and port
  
  Description: Point the tracker to the Plaspy server IP and port used for all devices.
  ```
  W000000,012,54.85.159.138,8888
  ```

- Switch the device to GPRS reporting mode
  
  Description: Configure reporting mode to use GPRS (required for TCP/UDP reporting).
  ```
  W000000,013,2
  ```

- Set the update interval
  
  Description: Configure the location reporting interval. Example value shown is 6 (interpretation depends on device firmware).
  ```
  W000000,014,6
  ```

- Query device IMEI
  
  Description: Use this command to request the device IMEI via SMS for verification.
  ```
  W000000,601
  ```

Keep placeholders such as {{apn}}, {{apnu}}, and {{apnp}} when replacing with your carrier values. The default device password in the samples is 000000; if the device password has changed, use the current device password in place of 000000.

## Configuration Notes

- Firmware and hardware revisions can change required command syntax or available parameters; always confirm the command set for your MT08 firmware version.
- The MT08 supports both SMS based configuration and GPRS reporting; use SMS when the GPRS link is not yet configured or for remote adjustments.
- Choose TCP or UDP transport based on your installation needs and the device firmware behavior. Plaspy supports either and will detect the protocol automatically when the device connects.
- When specifying APN credentials keep the APN, APN user, and APN password exact to avoid connection failures.
- The public commands above reflect common manufacturer SMS templates; follow TopShine instructions for any additional vendor-specific steps.

## Why Use Plaspy with This Configuration

Using the MT08 with Plaspy provides a straightforward path to real time location, alerts, and basic telemetry for motorcycles and small vehicles. Pointing the tracker to Plaspy's shared server endpoint and port enables the device to report position and event data so fleet managers and riders can see live location, receive notifications, and review historical traces on a unified platform.

To learn more about Plaspy and supported configurations visit https://www.plaspy.com. For the latest device specific commands, firmware notes, and manufacturer instructions consult TopShine at https://www.gztopshine.com/ to verify current setup and documentation.
