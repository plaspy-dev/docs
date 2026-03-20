---
slug: /topfly/solarguardx_120/configuration
id: solarguardx_120-configuration
sidebar_label: Configuration
title: TopFly - SolarGuardX 120 Configuration
sidebar_class_name: menu_item_tracker
description: Configure TopFly SolarGuardX 120 for use with Plaspy using public server settings and SMS commands
keywords:
  - TopFly SolarGuardX 120 configuration
  - SolarGuardX 120 setup
  - SolarGuardX 120 Plaspy
  - TopFly tracker configuration
  - GPS tracker server configuration
  - asset tracking configuration
  - fleet management setup
  - SolarGuardX 120 SMS setup
  - tracker APN configuration
  - Plaspy server settings
---

# TopFly - SolarGuardX 120 Configuration

This page documents the public configuration context for using the TopFly SolarGuardX 120 with Plaspy. It collects the shared server settings and the practical setup steps that are commonly used to point a device or its companion telemetry unit at Plaspy. Where manufacturer commands are publicly available they are shown here as examples for common installation flows.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer side setup steps can vary by firmware revision, hardware revision, installation type, and vendor tools. The SolarGuardX 120 documentation and the modelConfiguration commands shown below illustrate an SMS based setup flow and the device default password used in those public examples.

## Configuration Overview

The goal of this configuration is to prepare the SolarGuardX 120 to send security and status telemetry into the Plaspy platform so those events can be correlated with GPS tracker position feeds. The public configuration commands and settings focus on server endpoint, network authentication, and reporting cadence.

- Configure the device APN so it can use mobile data to reach Plaspy
- Point the device to the Plaspy server endpoint and port for telemetry ingestion
- Set reporting intervals so status and tamper events are delivered promptly
- Validate transport selection where required so the device sends data via UDP or TCP
- Confirm the device appears in Plaspy and that telemetry like tamper and battery state are visible

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support using UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and Plaspy uses the same port for all supported devices

## Typical Requirements Before Setup

- A powered SolarGuardX 120 unit with access to its SMS or manufacturer configuration method
- A SIM card with data and SMS enabled and the correct APN values for your mobile operator
- The APN, APN user, and APN password values for your mobile network provider (placeholders shown as {{apn}}, {{apnu}}, {{apnp}})
- Access to the installer or integrator documentation from TopFly for device specific SMS or tool based commands
- A Plaspy account or access to the Plaspy platform where you can confirm the device reports successfully

## How This Tracker Connects to Plaspy

The SolarGuardX 120 is configured to report telemetry to the shared Plaspy server endpoint and port so security events and lock state are visible alongside GPS tracker data. The device typically uses the mobile data network after APN configuration and sends periodic status updates to Plaspy.

- The device sends telemetry to the Plaspy server endpoint d.plaspy.com or IP 54.85.159.138 and port 8888
- Transport may be UDP or TCP depending on device settings and installer preference
- APN configuration enables the device to use GPRS or mobile data to reach Plaspy
- Reporting intervals control how often status, tamper, and battery telemetry are sent
- Plaspy automatically detects the tracker protocol so the server will accept the device feed on the shared port

## Common Configuration Workflow

1. Access the official TopFly configuration method for SolarGuardX 120, for example SMS commands or a vendor configuration tool
2. Enter the Plaspy server address using either the domain d.plaspy.com or the server IP 54.85.159.138 in the device configuration
3. Set the server port to 8888 as Plaspy uses the same port for all devices
4. Choose UDP or TCP transport if the device requires a transport selection
5. Provide mobile network APN details if the device needs GPRS data access
6. Apply or save the configuration and restart the device if required by the manufacturer
7. Validate that the device reports to Plaspy and that telemetry such as tamper, battery, and lock state appear in the platform

## Example Configuration Commands

The manufacturer provides a public SMS based setup flow. The sample commands below are sent as SMS messages to the device. The example uses the device default password 0000 as shown in the public configuration content. Placeholders are preserved where used.

- Set the device time zone to UTC 0
```
GMT,0000,0#
```

- Set the mobile network APN and optional APN user and password
```
APN,0000,{{apn}},{{apnu}},{{apnp}}#
```
Explanation: replace {{apn}} with your operator APN. If your APN requires a username or password fill {{apnu}} and {{apnp}} respectively, otherwise leave those placeholders empty according to the device SMS syntax required by TopFly.

- Set the GPRS server using the Plaspy server IP and port
```
IP,0000,54.85.159.138 8888#
```
Note: this example uses the Plaspy server IP and port 8888. You may enter d.plaspy.com instead of the IP if the TopFly firmware or configuration tool accepts a domain name.

- Set the periodic update interval to 60 seconds
```
TIMER,0000,60:60:0:0#
```
Explanation: this command configures the device reporting timer per the public example. Confirm exact timer field semantics with TopFly documentation for your firmware version.

## Configuration Notes

- The sample SMS commands use the default device password 0000 in the public examples; change the device password after initial setup if the device supports it
- Manufacturer firmware versions and tool syntax vary; commands and field order may differ by revision or by market specific firmware
- SMS based setup is shown in the public example here; some installations may use a USB or vendor tool when SMS is not available
- Choose UDP or TCP based on installer preference and network reliability; Plaspy accepts both transports on port 8888 and auto detects protocol
- Always verify APN values and replace the {{apn}}, {{apnu}}, and {{apnp}} placeholders with operator specific credentials

## Why Use Plaspy with This Configuration

Using the SolarGuardX 120 with Plaspy adds secure telemetry and tamper reporting to your asset tracking workflow so operators can see lock state, battery, and alarm events alongside GPS positions. For logistics and asset management deployments this combined visibility improves incident response, auditability of access events, and centralized monitoring across trailers, containers, and other high value assets.

To learn more about Plaspy visit https://www.plaspy.com and verify the latest device specific configuration notes, firmware behavior, and manufacturer guidance at https://www.topflytech.com/. Manufacturer specifications and setup methods can change over time so always confirm the current procedures on the official TopFly resources.
