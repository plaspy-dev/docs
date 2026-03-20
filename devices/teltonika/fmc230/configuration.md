---
slug: /teltonika/fmc230/configuration
id: fmc230-configuration
sidebar_label: Configuration
title: Teltonika - FMC230 Configuration
sidebar_class_name: menu_item_tracker
description: Guide to configure the Teltonika FMC230 for use with Plaspy including server settings commands and practical setup steps
keywords:
  - Teltonika FMC230 configuration
  - FMC230 setup
  - Teltonika FMC230 Plaspy
  - FMC230 server configuration
  - GPS tracker configuration
  - fleet management tracker setup
  - vehicle tracker FMC230
  - FMC230 BLE sensor setup
  - Teltonika tracker configuration
  - Plaspy device setup
---

# Teltonika - FMC230 Configuration

This page covers the public configuration context for using the Teltonika FMC230 with the Plaspy platform. It collects the pragmatic steps and public commands that are commonly used to point the FMC230 to Plaspy so the device can report location, events and BLE sensor telemetry into your Plaspy account.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer side setup steps can vary by firmware, hardware revision, installation type and vendor tools. The FMC230 can be configured using SMS commands as shown below, or through Teltonika configuration tools where available, so follow the method appropriate for your firmware and installation.

## Configuration Overview

This configuration prepares the FMC230 to send position and telemetry to Plaspy and ensures the device is visible and reporting as expected. It focuses on setting the server endpoint and port, selecting the transport mode if required, and validating connectivity.

- Set the tracker to report to the Plaspy server endpoint so position and event packets are delivered to your account.
- Configure the device transport to UDP or TCP depending on installer preference and network conditions.
- Apply APN credentials and any required GSM parameters so the tracker can use cellular data to reach the server.
- Validate reporting by checking device activity in Plaspy and confirming live updates.
- Use the example SMS setparam command below as a public, documented method to apply the basic server settings.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol regardless of the device protocol variant

## Typical Requirements Before Setup

- A powered FMC230 on a stable power source and installed according to manufacturer guidance.  
- Active cellular connectivity for the device including a SIM with data access appropriate for your region and device SKU.  
- Access to the official Teltonika configuration method you plan to use such as SMS commands or Teltonika configuration software.  
- APN credentials for the cellular provider ready to populate into the device parameters.  
- Access to Plaspy account details so you can confirm device visibility after configuration.  
- Basic knowledge of whether UDP or TCP is preferred in your network and firewall environment.

## How This Tracker Connects to Plaspy

The FMC230 is configured to send its position, event and telemetry messages to the shared Plaspy server endpoint and port so Plaspy can ingest the data and display it on your dashboard. Plaspy receives the messages and applies protocol detection and parsing automatically.

- The tracker reports location updates to d.plaspy.com or 54.85.159.138 on port 8888.  
- Messages may be sent over UDP or TCP depending on the device transport selection.  
- Plaspy automatically detects the incoming protocol variant and decodes the tracker messages.  
- Once reporting, Plaspy applies event logic and historical storage so you can monitor movement and sensor data.  
- Confirmation of successful connection is visible in Plaspy as live position updates and recent message timestamps.

## Common Configuration Workflow

1. Access the official Teltonika configuration method or software recommended for your FMC230 firmware and installer process.  
2. Enter the Plaspy server address using d.plaspy.com or the server IP 54.85.159.138 in the device server settings.  
3. Set the device port to 8888 for Plaspy communication.  
4. Choose UDP or TCP if your device requires a transport selection and your network has a preference.  
5. Provide APN and any required cellular credentials so the device can reach the Plaspy servers over the mobile network.  
6. Apply or save the configuration and restart the device if the method or firmware requires a reboot to activate changes.  
7. Validate that the device reports to Plaspy by checking for live updates and recent messages in your Plaspy account.

## Example Configuration Commands

The FMC230 can accept SMS based configuration commands. The following public example sets APN parameters and the Plaspy server endpoint and port. Preserve and replace the placeholders with your actual APN values as required.

- Example SMS command to set APN and Plaspy server parameters

```text
setparam 2001:{{apn}};2002:{{apnu}};2003:{{apnp}};2004:d.plaspy.com;2005:8888;2006:1
```

- Explanation of placeholders and parameters
  - {{apn}}  Replace with your mobile network APN name.  
  - {{apnu}} Replace with APN username if required by your carrier otherwise leave blank.  
  - {{apnp}} Replace with APN password if required otherwise leave blank.  
  - Parameter 2004 sets the server domain to d.plaspy.com.  
  - Parameter 2005 sets the port to 8888.  
  - Parameter 2006 may represent an enable flag for GPRS or a connection profile depending on firmware so verify in Teltonika documentation for your firmware version.

Note: The exact parameter identifiers and behavior can vary by firmware release. Use the Teltonika manual that matches your device firmware to confirm parameter meanings and acceptable values.

## Configuration Notes

- Firmware differences can change parameter IDs and supported SMS syntax; always verify the command set against the Teltonika documentation for your firmware.  
- Choose UDP or TCP based on network reliability and firewall configuration; TCP can provide session reliability while UDP is common for lower overhead.  
- SMS based configuration is a practical option for field setups but may be limited by message length and firmware parsing rules.  
- Replace APN placeholders with the carrier values specific to your SIM and region.  
- Plaspy uses the same port 8888 for all supported devices and automatically detects the tracker protocol so you do not need a different port per device model.

## Why Use Plaspy with This Configuration

Using the FMC230 with Plaspy gives organizations a straightforward way to collect ruggedized vehicle and asset telemetry, combined with BLE sensor data, into a single monitoring platform. The shared Plaspy server settings simplify deployments because all devices use the same port and Plaspy will detect the protocol automatically, reducing per device configuration complexity.

To learn more about Plaspy visit https://www.plaspy.com and review the latest Teltonika device details at https://www.teltonika-gps.com/ to confirm current firmware behavior and manufacturer configuration guidance.
