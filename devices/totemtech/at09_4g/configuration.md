---
slug: /totemtech/at09_4g/configuration
id: at09_4g-configuration
sidebar_label: Configuration
title: Totemtech - AT09-4G Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Totemtech AT09-4G setup with Plaspy including SMS commands and shared server settings
keywords:
  - Totemtech AT09-4G configuration
  - AT09-4G setup
  - Totemtech GPS tracker Plaspy
  - AT09-4G server configuration
  - AT09-4G SMS setup
  - Plaspy tracker setup
  - vehicle tracking AT09-4G
  - AT09-4G APN configuration
  - Totemtech tracker configuration
  - AT09-4G GPS platform setup
---

# Totemtech - AT09-4G Configuration

This page summarizes the public configuration context for using the Totemtech AT09-4G tracker with Plaspy. It focuses on the practical server settings and example SMS commands that are publicly available for the AT09-4G and shows how those values are applied so the device can report to Plaspy for live location and telemetry.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary with firmware, hardware revision, installation type, and vendor tools. Where available we include SMS command examples from the device guide so you can apply the Plaspy server settings and validate connectivity.

## Configuration Overview

The AT09-4G configuration process prepares the device to send location and telemetry to Plaspy and verifies connectivity. For many installations this involves setting the mobile operator APN, pointing the device at the Plaspy server endpoint, selecting the transport protocol if required, and validating that reports arrive in the platform.

- Configure APN and GPRS parameters so the device can use the mobile data network
- Point the tracker at the Plaspy server endpoint and the shared Plaspy port
- Choose transport protocol UDP or TCP if the device requires a selection
- Optionally perform a factory reset or apply the default device password when configuring
- Validate reporting in Plaspy to confirm position and telemetry visibility

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- A powered AT09-4G installed or connected to a bench power supply so it can boot and register on the mobile network
- An active SIM card with a data plan and the operator APN information for GPRS or LTE connectivity
- Ability to send SMS commands to the device or access to the manufacturer configuration tool depending on installer preference
- The device default password if SMS configuration requires authentication note that the public example uses a default password of 000000
- Access to Plaspy to confirm the device appears and sends telemetry after configuration

## How This Tracker Connects to Plaspy

The AT09-4G is configured to send GNSS and telemetry data to the shared Plaspy server endpoint and port so Plaspy can ingest position updates and device events. Reporting can be triggered by timers, sensor events, or alarms depending on device configuration and firmware capabilities.

- The tracker sends GPRS or LTE data to d.plaspy.com or directly to 54.85.159.138 on port 8888
- The device can use either UDP or TCP transport on the configured port depending on installer choice
- Plaspy automatically detects the tracker protocol so the platform can decode the incoming messages
- Once reporting is active Plaspy receives location updates and event data for live monitoring and historical reporting
- All Plaspy supported devices use the same port which simplifies multi device deployments

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software or prepare to send SMS commands per the device instructions
2. Enter d.plaspy.com as the server domain or 54.85.159.138 as the server IP in the server settings field
3. Set the server port to 8888 which is the shared Plaspy port used by all devices
4. Choose UDP or TCP as the transport if the device requires an explicit selection
5. Apply or save the configuration in the device tool or send the SMS commands to commit settings
6. Restart or power cycle the device if required by the tracker firmware to apply network settings
7. Validate that the device reports to Plaspy by checking for location updates and telemetry in the platform

## Example Configuration Commands

The AT09-4G provides an SMS based configuration option. The following public SMS commands are examples extracted from the device documentation. The sample commands use the default device password 000000. Keep placeholders such as [apn], [apnu], and [apnp] and replace them with operator specific values when required.

- Optional initial factory reset using default password
```text
*000000,007#
```
Label: factory reset optional or for initial setup only

- Set the operator APN including username and password placeholders
```text
*000000,002,[apn],[apnu],[apnp]#
```
Explanation: replace [apn] with the mobile operator APN string. If the APN requires a username use [apnu] and a password use [apnp] otherwise leave placeholders empty per the device SMS syntax.

- Set the GPRS server to Plaspy by IP with port and server index
```text
*000000,003,54.85.159.138,8888,1#
```
Explanation: this explicitly points the device to Plaspy using the public IP and the shared port 8888. The final parameter is a server index used by the device to select primary server.

- Enable acknowledgement reporting or set ACK mode
```text
*000000,019,1#
```
Explanation: sets ACK to enabled per manufacturer command set.

- Set reporting intervals for periodic updates for example 60 second interval
```text
*000000,60,60,0,60#
```
Explanation: configures timing parameters for location reporting in the example provided by the manufacturer. Adjust values based on reporting needs and data plan.

Note: Keep the default password 000000 unless changed by your installation procedure. If you change the device password you must use the new password in the SMS commands.

## Configuration Notes

- SMS based configuration is shown here because it is included in the public device commands. Manufacturer tools or USB configuration may also be available and are often used for batch deployments.
- Firmware and hardware revisions may change command syntax or available parameters. Always confirm the exact SMS format for your device firmware version.
- Choose TCP or UDP based on your reliability and firewall requirements. Plaspy supports both and automatically detects protocol, but the transport you select should match your network design.
- All Plaspy devices use the same port 8888 which simplifies server configuration when registering multiple device models.
- If APN credentials are required use the correct [apn], [apnu], and [apnp] values from your mobile operator; leaving username or password empty is acceptable when the operator does not require them.

## Why Use Plaspy with This Configuration

Using the AT09-4G with Plaspy provides a straightforward path to real time location and rich telemetry for fleet and asset monitoring. Pointing the device at d.plaspy.com or 54.85.159.138 on the shared port 8888 and enabling the desired reporting triggers allows Plaspy to ingest GNSS, sensor, and event data for operational visibility, alerts, and historical analysis.

To learn more about Plaspy visit https://www.plaspy.com and review Totemtech device details at the manufacturer site http://www.totemtek.com/ for the latest device specific instructions and firmware notes. Manufacturer specifications and configuration methods can change over time so verify the current setup details on the official Totemtech documentation.
