---
slug: /topfly/tlw2_12bl/configuration
id: tlw2_12bl-configuration
sidebar_label: Configuration
title: TopFly - TLW2-12BL Configuration
sidebar_class_name: menu_item_tracker
description: Guide to configure TopFly TLW2 12BL GPS tracker for use with Plaspy server settings and SMS setup
keywords:
  - TopFly TLW2 12BL configuration
  - TopFly TLW2 12BL setup
  - TLW2 12BL Plaspy configuration
  - TopFly GPS tracker configuration
  - TLW2 12BL server settings
  - TLW2 12BL SMS commands
  - TopFly tracker Plaspy setup
  - Vehicle GPS tracker configuration
  - Fleet tracking TLW2 12BL
  - Plaspy tracker configuration
---

# TopFly - TLW2-12BL Configuration

This page documents the public configuration context for using the TopFly TLW2-12BL GPS tracker with the Plaspy platform. It summarizes the planner level settings and practical setup steps you can use to point the device at Plaspy, including the SMS commands shown in the device documentation and the shared Plaspy server values required for reporting.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer side setup steps can vary by firmware revision, hardware revision, installation type, and vendor tools, so use the commands and workflow below as a practical public reference and verify any details against TopFly documentation as needed.

## Configuration Overview

Preparing a TLW2-12BL for Plaspy means configuring the tracker to connect to the Plaspy server endpoint, ensuring mobile data or SMS control is working, and validating that position and telemetry arrive in the platform. The modelConfiguration below provides an SMS based example used by many installers for basic setup.

- Configure the device network settings so it can reach the Plaspy server endpoint and port.
- Set the correct APN and credentials for the installed SIM card so GPRS data can be used.
- Point the tracker to the Plaspy reporting endpoint and confirm the transport protocol if required by the device.
- Set an appropriate upload interval so Plaspy receives the desired frequency of position updates.
- Verify device connectivity and live visibility in Plaspy after applying settings.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP depending on device configuration needs  
- Plaspy automatically detects the tracker protocol when devices report to the shared endpoint

## Typical Requirements Before Setup

- A powered and installed TLW2-12BL with access to its SMS or configuration interface.
- An active SIM card with a data plan and the correct APN for the mobile operator.
- Ability to send SMS commands from a phone or a configuration tool if the device uses SMS setup.
- Knowledge of the device password or default password to authorize configuration commands (default shown in example commands).
- Access to official TopFly configuration documentation or vendor tools for firmware specific instructions.
- A Plaspy account and the target device identifier available to confirm the device appears after configuration.

## How This Tracker Connects to Plaspy

The TLW2-12BL streams position and telemetry to Plaspy by sending data packets to the shared Plaspy server endpoint and port. Plaspy ingests GNSS coordinates, status changes, and telemetry and presents them on maps, dashboards, and reports.

- Device reports are sent to the Plaspy endpoint at d.plaspy.com or to IP 54.85.159.138 using port 8888.
- The tracker can use UDP or TCP as transport depending on device settings and network conditions.
- Plaspy automatically detects the protocol used by the tracker so devices can be visible without custom protocol selection in the platform.
- Location and telemetry updates appear in Plaspy after the tracker successfully connects and authenticates to the shared endpoint.
- Onboard buffering on the device uploads stored points to Plaspy when connectivity returns after outages.

## Common Configuration Workflow

1. Access the official TopFly configuration method for the TLW2-12BL such as the SMS command set or vendor configuration software.
2. Set the mobile operator APN and credentials for the SIM so the device can use GPRS data.
3. Enter the Plaspy server endpoint by using either the domain d.plaspy.com or the IP 54.85.159.138 in the device server settings.
4. Set the device to use port 8888 for outbound reporting.
5. Choose UDP or TCP if the device requires explicit transport selection.
6. Apply or save the configuration on the device and restart the tracker if required by the device workflow.
7. Validate that the device reports to Plaspy and that positions and telemetry are visible in the platform.

## Example Configuration Commands

The TLW2-12BL supports SMS configuration commands in the public documentation. The sample commands below use the device default password 0000 and set timezone, APN, the Plaspy server IP and port, and a reporting interval. Preserve placeholders when replacing APN values.

- Default device password used in the sample commands is 0000.
- Send each line as a separate SMS to the tracker phone number.

GMT command to set time zone (example sets UTC 0)
```
GMT,0000,0#
```

APN command to set the mobile operator APN and optional APN username and password
```
APN,0000,[apn],[apnu],[apnp]#
```
- [apn] placeholder is the operator APN string.
- [apnu] and [apnp] are optional APN username and APN password placeholders used if your carrier requires them.

GPRS server command using the public Plaspy server IP and port 8888
```
IP,0000,54.85.159.138 8888#
```
- This command sets the device to report to Plaspy using the provided IP and port. Some firmware variants accept a domain name instead of an IP; consult TopFly docs if you prefer to use d.plaspy.com.

Timer command to set reporting interval for position updates (example sets 60 seconds)
```
TIMER,0000,60:60:0:0#
```

## Configuration Notes

- Firmware variations may accept domain names or require a slightly different IP and port syntax. If domain support is needed, check TopFly firmware notes before switching from IP to d.plaspy.com.
- The TLW2-12BL supports SMS based configuration as shown, but installers may also use vendor tools or cloud provisioning depending on firmware and available tools.
- Choose UDP or TCP depending on network reliability and your operational preferences; Plaspy supports both and automatically detects the protocol used by devices.
- Keep the device password secure and change default credentials where supported by the device.
- Validate both immediate live updates and buffered point uploads after a network interruption to confirm end to end behavior.

## Why Use Plaspy with This Configuration

Using the TLW2-12BL with Plaspy gives fleet operators precise, high frequency position updates and a single endpoint for telemetry ingestion. Plaspy’s automatic protocol detection and shared server configuration simplify onboarding multiple device models because all supported devices use the same reporting port and server endpoint.

To learn more about Plaspy visit https://www.plaspy.com. For the latest device specific configuration methods, firmware behavior and manufacturer details verify the official TopFly documentation at https://www.topflytech.com/
