---
slug: /v_sun/v_580/configuration
id: v_580-configuration
sidebar_label: Configuration
title: V-SUN - V-580 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for V-SUN V-580 showing Plaspy server settings and SMS commands for setup
keywords:
  - V-SUN V-580 configuration
  - V-SUN V-580 setup
  - V-SUN GPS tracker configuration
  - V-SUN V-580 server configuration
  - V-SUN tracking software configuration
  - Plaspy tracker setup
  - Plaspy device configuration
  - V-SUN GPS platform setup
  - child tracking device configuration
  - V-580 SMS setup
---

# V-SUN - V-580 Configuration

This page documents the public configuration context for using the V-SUN V-580 child tracking device with Plaspy. It gathers the practical, publicly available settings and example SMS commands used to point the device at the Plaspy platform so you can prepare the tracker for visibility in your Plaspy account.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The V-580 supports SMS configuration and GPRS server settings in its public command set, and this guide incorporates those sample commands and explains how to apply the required Plaspy values.

## Configuration Overview

This configuration process prepares the V-580 to send location and status data to Plaspy by setting the device APN and GPRS server, enabling GPRS and GPS reporting, and choosing the transport protocol. The sample commands included below are sent by SMS to the device and use the device default password where indicated.

- Configure the device APN so it can use mobile data for reporting
- Set the device GPRS server endpoint to point to Plaspy
- Enable GPRS and GPS reporting modes so the tracker transmits data
- Apply reporting intervals to control update frequency
- Validate that the device appears and reports correctly in Plaspy

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support is available for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Typical Requirements Before Setup

- A powered and functional V-SUN V-580 device with SMS and GPRS capability
- An active SIM card with data and SMS enabled and correct APN credentials
- Knowledge of the device default SMS password which is 0000 in the sample commands
- A mobile phone able to send SMS commands to the tracker for configuration
- Access to the manufacturer's documentation or installer tool for firmware specific instructions
- A Plaspy account or access to the Plaspy platform to verify device reporting

## How This Tracker Connects to Plaspy

The V-580 is configured to report location and status to the shared Plaspy server endpoint and port. Once APN and server settings are applied, the device uses mobile data to send messages to d.plaspy.com or the numeric server address on port 8888 using the chosen transport. Plaspy receives these messages and automatically detects the protocol used by the tracker so no device-specific protocol selection on the platform side is required.

- The device uses configured APN credentials to establish GPRS connectivity
- GPRS messages are sent to d.plaspy.com or 54.85.159.138 on port 8888
- Transport can be configured as UDP or TCP on the device if required
- Plaspy auto-detects the tracker protocol and processes incoming data
- Successful reporting results in visibility and tracking within Plaspy

## Common Configuration Workflow

1. Access the official V-SUN configuration method or software, typically by sending SMS commands as documented by the manufacturer
2. Enter the Plaspy server host by setting d.plaspy.com or 54.85.159.138 on the device
3. Set the server port to 8888 as required by Plaspy
4. Choose UDP or TCP transport on the device if the device requires a transport selection
5. Apply or save the configuration on the device, for SMS that means sending the proper SMS commands
6. Restart or power cycle the tracker if required by the device or after applying server settings
7. Validate that the device reports to Plaspy by confirming the device appears and sends updates to the platform

## Example Configuration Commands

The V-580 can be configured by sending SMS commands to the device. The sample commands below are taken from public device configuration content. The device default password used in these examples is 0000. Replace placeholders such as [apn], [apnu], and [apnp] with your carrier APN, APN username, and APN password as required.

- Optional factory reset before initial setup
  ```
  *RESET#0000##
  ```

- Set the operator APN
  ```
  #803#0000#[apn]#[apnu]#[apnp]##
  ```
  - Explanation: Replace [apn] with your carrier APN. Include [apnu] and [apnp] only if your operator requires an APN username or password.

- Set the GPRS server to the Plaspy server IP and port
  ```
  #804#0000#54.85.159.138#8888##
  ```
  - Alternative: some configurations accept the server domain instead of the numeric IP. You can use d.plaspy.com where the device supports domain names.

- Set the moving update interval (sample value from public content)
  ```
  #805#0000#120#1##
  ```
  - Explanation: This example sets a reporting interval value as provided by the public command sample. Adjust intervals according to your needs and device capability.

- Set the static update interval (sample value from public content)
  ```
  #809#0000#120#1##
  ```

- Enable GPRS reporting mode
  ```
  7100000
  ```

- Enable GPS mode
  ```
  2220000
  ```

Note: Preserve the order when applying commands if the manufacturer recommends it. If your device accepts domain names for the server, you may use d.plaspy.com instead of the numeric IP address. Always confirm exact command syntax with the device documentation for your firmware version.

## Configuration Notes

- Many V-580 setup steps are SMS driven in public examples; confirm whether your device firmware supports SMS commands or an alternative configuration tool
- Firmware revisions and hardware variants can change available commands and behavior so verify the exact syntax with the manufacturer
- Choose UDP or TCP based on device support and network considerations; Plaspy supports both and auto detects the protocol on receipt
- Keep the default password information secure and change it if the device supports password updates
- APN credentials are carrier specific and must be supplied accurately for GPRS reporting to work

## Why Use Plaspy with This Configuration

Using the V-SUN V-580 with Plaspy gives organizations and parents a centralized view of device location and events through a single, shared server configuration. Pointing the tracker at d.plaspy.com or 54.85.159.138 on port 8888 and enabling GPRS lets the device transmit location updates that Plaspy automatically processes, giving you visibility and the ability to monitor arrivals, departures, and SOS events from the platform.

To learn more about Plaspy and how it handles device connections visit https://www.plaspy.com. For the most current device specific commands, firmware notes, and manufacturer guidance verify details on the V-SUN website http://www.v-sun.cc/ since manufacturer specifications and setup methods can change over time.
