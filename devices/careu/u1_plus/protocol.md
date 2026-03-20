---
slug: /careu/u1_plus/protocol
id: u1_plus-protocol
sidebar_label: Protocol
title: CAREU - U1 PLUS Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for CAREU U1 PLUS compatibility with Plaspy server and fleet integration
keywords:
  - CAREU U1 PLUS protocol
  - CAREU U1 PLUS GPS protocol
  - CAREU U1 PLUS tracking
  - CAREU U1 PLUS Plaspy compatibility
  - CAREU GPS tracker communication
  - U1 PLUS vehicle telemetry
  - fleet tracking protocol
  - OBD II CAN telemetry
  - commercial vehicle tracking
  - GPS tracker integration
---

# CAREU - U1 PLUS Protocol

This page explains the public protocol context for using the CAREU U1 PLUS tracker with the Plaspy platform. It describes how the device communicates at a high level, what network endpoints Plaspy provides for device reporting, and what to consider when integrating the U1 PLUS into a Plaspy deployment. The material is intended to be public facing and non sensitive while helping fleet and telematics teams understand what protocol awareness is important for reliable operation.

The U1 PLUS is Plaspy compatible out of the box and supports broad vehicle telemetry including OBD II and CAN interpreter data, fuel sensing, accelerometer events, and multi sensor inputs. Plaspy uses shared connection settings across all supported devices and automatically detects the tracker protocol, though exact behavior can vary with firmware versions, hardware revisions, and manufacturer implementation. Review manufacturer documentation for the most current device specific details.

## Protocol Overview

At a general level, the tracker protocol defines how the U1 PLUS reports identification, location, and telemetry to a backend service and how control messages can be delivered to the device. For Plaspy integration, the protocol role is limited to what data the device sends and how the device addresses the Plaspy endpoint so the platform can ingest and normalize messages for tracking and reporting.

- Enables device identification so Plaspy can associate incoming telemetry with the correct vehicle record.
- Transports GNSS position, timestamp, and movement information to Plaspy for location updates.
- Carries vehicle telemetry such as OBD II and CAN parameters, sensor readings, and accelerometer events for richer reporting.
- Supports event notifications like geofence, tamper, power loss, and jamming alerts that Plaspy surfaces to users.
- Allows fallback channels and auxiliary transports when cellular data is limited, enabling resilient reporting to Plaspy.

## How Plaspy Detects the Protocol

Plaspy receives device data at a shared server endpoint and automatically determines which tracker protocol each device is using when the device sends data to that endpoint. In most common deployments you do not need to choose a protocol inside Plaspy if the U1 PLUS is configured to report to the Plaspy endpoint correctly.

- Plaspy server domain is d.plaspy.com and Plaspy server IP is 54.85.159.138 to receive device reports.
- The port is 8888 and this is the same port used by all devices supported by Plaspy.
- The device may be configured using UDP or TCP on port 8888 depending on device support and network conditions.
- Plaspy automatically detects the tracker protocol once the device sends identifying and telemetry data to the platform.
- Proper device configuration to point at the Plaspy endpoint is the common requirement for automatic detection to succeed.

## Transport and Connection Context

Connection choices determine how the U1 PLUS reaches Plaspy and how reliably telemetry is delivered across changing cellular conditions. The U1 PLUS supports modern cellular bands and fallbacks, so selecting the appropriate transport and endpoint for your deployment helps ensure consistent reporting to Plaspy.

- The device may use UDP or TCP on port 8888; choose transport based on modem capabilities and network reliability.
- Devices can be configured to report to d.plaspy.com or directly to 54.85.159.138 as the Plaspy ingestion endpoint.
- All devices in Plaspy use the same port which simplifies fleet wide configuration and firewall rules.
- Cellular fallbacks such as switching between LTE, 3G and 2G affect radio availability but do not change the Plaspy endpoint or port.
- Alternative reporting channels supported by the device, such as FTP or SMS, are complementary to direct TCP or UDP reporting to Plaspy.

## Protocol Compatibility Notes

- Firmware revisions can alter reported fields, frequency of heartbeat messages, and available telemetry; always verify firmware behavior for a given U1 PLUS unit.
- Hardware revisions and optional modules such as ultrasonics, RS-232 accessories, or video interfaces may expose additional telemetry fields or commands.
- Manufacturer side settings or regional carrier configurations can influence which transport modes or network bands are used.
- Choosing UDP or TCP can affect message delivery characteristics; confirm the device modem and network conditions before large scale deployment.
- Plaspy uses a unified port and automatic detection, but compatibility still depends on the device correctly targeting the Plaspy endpoint.
- Validate device feature support such as OBD II CAN parameters, sensor types, and FOTA capabilities against the official product documentation.

## Why Protocol Understanding Matters

Understanding how the U1 PLUS communicates with Plaspy helps administrators and integrators deploy devices reliably, troubleshoot issues quickly, and plan for firmware or hardware differences across a fleet. Protocol awareness reduces configuration errors and speeds up time to first report.

- Ensures devices are pointed at d.plaspy.com or 54.85.159.138 and using port 8888 so Plaspy can receive data.
- Helps diagnose connectivity problems when a unit fails to appear in Plaspy or when telemetry is incomplete.
- Informs decisions about transport selection, antenna placement, and cellular band planning for robust coverage.
- Supports planning for firmware updates, sensor expansions, and accessory integrations to keep telemetry consistent.
- Aids in mapping device reported fields to Plaspy dashboards and alerting rules for operational visibility.

## Why Use Plaspy with This Protocol

Using the U1 PLUS with Plaspy gives fleet operators a consolidated platform for location, vehicle telemetry, and event monitoring. The device’s OBD II and CAN interpreter support, fuel sensor options, accelerometer based driver behaviour events, and accessory interfaces feed Plaspy with the kinds of data used for routing, maintenance planning, fuel oversight, and safety workflows. Plaspy’s automatic protocol detection and single port endpoint simplify device onboarding at scale.

To learn more about deploying CAREU U1 PLUS trackers with Plaspy, visit https://www.plaspy.com. For the most current device level protocol details, firmware notes, and hardware revisions consult the manufacturer documentation at https://www.systech-iot.com/ to verify behavior and feature availability.
