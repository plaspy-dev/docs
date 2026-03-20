---
slug: /sentar/d38/protocol
id: d38-protocol
sidebar_label: Protocol
title: Sentar - D38 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for integrating the Sentar D38 kids smartwatch with Plaspy including connection and compatibility context
keywords:
  - Sentar D38 protocol
  - Sentar D38 GPS protocol
  - Sentar D38 communication protocol
  - D38 tracker Plaspy
  - Sentar kids smartwatch protocol
  - D38 tracking protocol
  - Plaspy device compatibility
  - GPS tracker protocol Sentar
  - Sentar D38 integration
  - D38 telemetry Plaspy
---

# Sentar - D38 Protocol

This page provides a public protocol overview for using the Sentar D38 GPS smartwatch with the Plaspy platform. It describes the communication context you should expect when integrating the device, and summarizes the kinds of telemetry and events the device typically reports to a tracking server in non sensitive terms. The goal is to help technical users and integrators understand how the D38 interacts with Plaspy without exposing private implementation details.

The D38 is an Android based kids smartwatch with GPS, AGPS, LBS and WiFi positioning, a physical SOS button, an on device camera, Nano SIM cellular connectivity and a 710mAh battery. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device is configured to report to Plaspy. Exact protocol behavior can vary by firmware version, hardware revision and manufacturer implementation, so expect some variation in fields and event reporting between firmware builds and regional hardware variants.

## Protocol Overview

The D38 communicates location, status and event data to a remote server using its built in cellular modem and IP connectivity. The public protocol context covers how the tracker identifies itself, how it sends position and telemetry, and how event notifications like SOS are delivered to Plaspy in a form the platform can process.

- Reports GNSS fixes and complementary position cues such as AGPS, LBS and WiFi to provide usable location updates to Plaspy.
- Sends device identity and health telemetry including battery level and cellular signal so Plaspy can display device status.
- Delivers event notifications such as SOS presses and on device camera or call indicators for immediate attention.
- Transmits messages over standard IP transport so Plaspy can receive real time updates, build history, and trigger alerts.
- Works with Plaspy to normalize mixed positioning inputs into maps, timelines and status reports for monitoring and analysis.

## How Plaspy Detects the Protocol

Plaspy receives incoming device reports at a single shared endpoint and port and uses that input to automatically detect the tracker protocol. Because the platform is designed to accept many device types on the same listening port, the user normally does not need to manually select a protocol inside Plaspy when the tracker is correctly configured to report to Plaspy.

- Plaspy public server domain is d.plaspy.com and its public server IP is 54.85.159.138 for device reporting.
- Plaspy listens on port 8888 which is the same port used for all devices supported by the platform.
- Devices may be configured to use either UDP or TCP transport on port 8888 depending on device capabilities and settings.
- When a properly configured D38 reports to the Plaspy endpoint, Plaspy performs automatic detection so manual protocol selection is typically unnecessary.
- Verify that the device server address and transport settings match the Plaspy endpoint so detection and reporting succeed.

## Transport and Connection Context

The D38 can be set to send data over standard IP transport using the device cellular connection. For Plaspy integration, the main connection considerations are the choice of transport protocol and ensuring the device is pointed to the Plaspy endpoint.

- The device may be configured to use UDP or TCP on port 8888 depending on device support and configuration.
- Devices may point to the Plaspy domain d.plaspy.com or the public server IP 54.85.159.138 as their target.
- Plaspy uses the same port 8888 for all supported devices which simplifies server configuration across device fleets.
- Ensure the device has an active SIM data plan and correct APN settings so outbound reports reach Plaspy.
- Account for carrier NAT, firewalls and regional network behavior when diagnosing connectivity issues to the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware versions and over the air updates can introduce changes to reported fields and event behavior that affect how the D38 appears in Plaspy.
- Hardware revisions and regional variants may change supported radio bands or sensor availability which can alter the set of telemetry the device sends.
- Manufacturer configuration pages or provisioning tools may offer transport and server fields that must be set to the Plaspy endpoint for successful reporting.
- Some event types such as camera snapshots or two way call indicators may be reported differently by firmware releases and require validation on Plaspy.
- Selecting UDP versus TCP on the device can change delivery characteristics but does not change the port used by Plaspy.
- Always validate behavior on a test device before rolling out at scale and consult official manufacturer notes for firmware specific details.

## Why Protocol Understanding Matters

Understanding the D38 communication protocol and connection context helps ensure reliable device setup, faster troubleshooting, and more predictable long term operation within Plaspy. Clear knowledge of what the device sends and how Plaspy accepts it reduces integration time and avoids common configuration errors.

- Confirms correct server address and transport so the device reaches the Plaspy endpoint d.plaspy.com or 54.85.159.138 on port 8888.
- Helps identify causes of missing telemetry such as incorrect APN, blocked outbound ports, or firmware incompatible fields.
- Enables targeted testing of event flows like SOS alerts, location updates and status reporting before production use.
- Supports planning for firmware updates and hardware revisions that may change reported fields or event formats.
- Improves operational monitoring by knowing which telemetry elements to expect from the D38 such as GNSS, AGPS, LBS, WiFi and battery status.

## Why Use Plaspy with This Protocol

Using the Sentar D38 with Plaspy offers a practical solution for organizations and families that need consistent visibility, event alerts and historical playback from a wearable child tracker. The D38 provides multi mode positioning, a dedicated SOS button and on device camera capabilities that, when sent to Plaspy, become actionable signals for monitoring, alerts and reporting.

Learn more about how Plaspy receives and normalizes device telemetry at https://www.plaspy.com and review the latest Sentar device documentation and firmware notes at http://www.sentarsmart.com/ to confirm current protocol support and device behavior. Protocol support, firmware behavior and manufacturer implementation details can change over time, so verify device specific information with the official manufacturer resources.
